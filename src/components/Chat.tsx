import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import { Send, ImagePlus, LogOut, MessageSquare, X, Loader2 } from "lucide-react";
import { toast } from "sonner";

type ChatMessage = {
  id: string;
  user_id: string;
  display_name: string;
  content: string;
  image_url: string | null;
  created_at: string;
};

const linkify = (text: string) => {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((p, i) =>
    /^https?:\/\//.test(p) ? (
      <a
        key={i}
        href={p}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-2 break-all hover:text-primary transition-smooth"
      >
        {p}
      </a>
    ) : (
      <span key={i}>{p}</span>
    )
  );
};

const AuthPanel = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: { display_name: name || email.split("@")[0] },
          },
        });
        if (error) throw error;
        toast.success("Ro'yxatdan o'tdingiz!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Xush kelibsiz!");
      }
    } catch (err: any) {
      toast.error(err.message || "Xatolik");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} className="p-8 rounded-3xl glass space-y-4 max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="size-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <MessageSquare className="size-5 text-primary-foreground" />
        </div>
        <div>
          <div className="font-bold text-lg">{mode === "signup" ? "Ro'yxatdan o'tish" : "Kirish"}</div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Chatga qo'shilish uchun email
          </div>
        </div>
      </div>

      {mode === "signup" && (
        <input
          type="text"
          placeholder="Ismingiz"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm transition-smooth"
        />
      )}
      <input
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm transition-smooth"
      />
      <input
        type="password"
        required
        minLength={6}
        placeholder="Parol (kamida 6 ta)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm transition-smooth"
      />
      <button
        type="submit"
        disabled={busy}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs glow-primary hover:scale-[1.02] transition-smooth disabled:opacity-50"
      >
        {busy && <Loader2 className="size-4 animate-spin" />}
        {mode === "signup" ? "Ro'yxatdan o'tish" : "Kirish"}
      </button>
      <button
        type="button"
        onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
        className="w-full text-xs text-muted-foreground hover:text-primary transition-smooth"
      >
        {mode === "signup" ? "Akkauntim bor — kirish" : "Yangi hisob yaratish"}
      </button>
    </form>
  );
};

const Chat = () => {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("chat_messages")
        .select("*")
        .order("created_at", { ascending: true })
        .limit(200);
      if (data) setMessages(data as ChatMessage[]);
    };
    load();

    const channel = supabase
      .channel("chat_messages_stream")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "chat_messages" },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as ChatMessage]);
        }
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "chat_messages" },
        (payload) => {
          setMessages((prev) => prev.filter((m) => m.id !== (payload.old as any).id));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages.length]);

  const displayName =
    (user?.user_metadata as any)?.display_name || user?.email?.split("@")[0] || "Anonim";

  const pickImage = (f: File | null) => {
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) {
      toast.error("Rasm 5MB dan katta");
      return;
    }
    setImageFile(f);
    setImagePreview(URL.createObjectURL(f));
  };

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    if (!text.trim() && !imageFile) return;
    setSending(true);
    try {
      let imageUrl: string | null = null;
      if (imageFile) {
        const ext = imageFile.name.split(".").pop() || "png";
        const path = `${user.id}/${Date.now()}.${ext}`;
        const { error: upErr } = await supabase.storage
          .from("chat-images")
          .upload(path, imageFile, { contentType: imageFile.type });
        if (upErr) throw upErr;
        const { data: signed } = await supabase.storage
          .from("chat-images")
          .createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
        imageUrl = signed?.signedUrl ?? null;
      }
      const { error } = await supabase.from("chat_messages").insert({
        user_id: user.id,
        display_name: displayName,
        content: text.trim(),
        image_url: imageUrl,
      });
      if (error) throw error;
      setText("");
      setImageFile(null);
      setImagePreview(null);
      if (fileRef.current) fileRef.current.value = "";
    } catch (err: any) {
      toast.error(err.message || "Yuborilmadi");
    } finally {
      setSending(false);
    }
  };

  const remove = async (id: string) => {
    await supabase.from("chat_messages").delete().eq("id", id);
  };

  return (
    <section id="chat" className="relative py-32 px-6 md:px-10">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-20 left-1/4 size-[400px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 size-[400px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">05 //</span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Jonli chat</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="text-center mb-12 space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
            Ochiq <span className="gradient-text">chat</span> xonasi
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light">
            Emailingiz bilan kiring va hammaga xabar, rasm yoki link yuboring.
          </p>
        </div>

        {!user ? (
          <AuthPanel />
        ) : (
          <div className="rounded-3xl glass overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card/40">
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-accent animate-pulse" />
                <div>
                  <div className="text-sm font-bold">{displayName}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {user.email}
                  </div>
                </div>
              </div>
              <button
                onClick={() => supabase.auth.signOut()}
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-smooth"
              >
                <LogOut className="size-4" /> Chiqish
              </button>
            </div>

            <div ref={listRef} className="h-[500px] overflow-y-auto px-4 md:px-6 py-6 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-sm text-muted-foreground py-16">
                  Hozircha xabarlar yo'q — birinchi bo'lib yozing!
                </div>
              )}
              {messages.map((m) => {
                const mine = m.user_id === user.id;
                return (
                  <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] md:max-w-[70%] group`}>
                      <div
                        className={`flex items-center gap-2 mb-1 ${mine ? "justify-end" : "justify-start"}`}
                      >
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {m.display_name}
                        </span>
                        <span className="text-[10px] text-muted-foreground/60">
                          {new Date(m.created_at).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <div
                        className={`relative rounded-2xl px-4 py-3 text-sm leading-relaxed break-words ${
                          mine
                            ? "bg-primary text-primary-foreground rounded-tr-sm"
                            : "bg-card border border-border rounded-tl-sm"
                        }`}
                      >
                        {m.image_url && (
                          <a
                            href={m.image_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mb-2 rounded-lg overflow-hidden"
                          >
                            <img
                              src={m.image_url}
                              alt="Chat"
                              className="max-h-72 w-auto rounded-lg"
                            />
                          </a>
                        )}
                        {m.content && <div>{linkify(m.content)}</div>}
                        {mine && (
                          <button
                            onClick={() => remove(m.id)}
                            aria-label="O'chirish"
                            className="absolute -top-2 -right-2 size-6 rounded-full bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center"
                          >
                            <X className="size-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <form onSubmit={send} className="border-t border-border p-4 bg-card/40 space-y-3">
              {imagePreview && (
                <div className="relative inline-block">
                  <img src={imagePreview} alt="Preview" className="h-24 rounded-lg" />
                  <button
                    type="button"
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview(null);
                      if (fileRef.current) fileRef.current.value = "";
                    }}
                    className="absolute -top-2 -right-2 size-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center"
                  >
                    <X className="size-3" />
                  </button>
                </div>
              )}
              <div className="flex items-end gap-2">
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => pickImage(e.target.files?.[0] ?? null)}
                />
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="size-11 shrink-0 rounded-xl border border-border hover:border-primary hover:text-primary transition-smooth flex items-center justify-center"
                  aria-label="Rasm qo'shish"
                >
                  <ImagePlus className="size-5" />
                </button>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(e as any);
                    }
                  }}
                  rows={1}
                  placeholder="Xabar yozing yoki link tashlang..."
                  className="flex-1 resize-none px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm transition-smooth max-h-32"
                />
                <button
                  type="submit"
                  disabled={sending || (!text.trim() && !imageFile)}
                  className="size-11 shrink-0 rounded-xl bg-primary text-primary-foreground hover:scale-105 transition-smooth glow-primary flex items-center justify-center disabled:opacity-50 disabled:hover:scale-100"
                  aria-label="Yuborish"
                >
                  {sending ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Chat;
