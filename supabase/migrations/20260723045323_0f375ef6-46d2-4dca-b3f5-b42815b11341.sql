
CREATE POLICY "Anyone can view chat images"
ON storage.objects FOR SELECT
USING (bucket_id = 'chat-images');

CREATE POLICY "Authenticated users can upload chat images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'chat-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own chat images"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'chat-images' AND auth.uid()::text = (storage.foldername(name))[1]);
