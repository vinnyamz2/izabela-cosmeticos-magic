-- Create storage buckets for permanent uploads
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('product-images', 'product-images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/jpg']),
  ('testimonial-audios', 'testimonial-audios', true, 10485760, ARRAY['audio/ogg', 'audio/mpeg', 'audio/wav', 'audio/mp3']),
  ('uploads', 'uploads', true, 10485760, NULL);

-- Create storage policies
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id IN ('product-images', 'testimonial-audios', 'uploads'));

CREATE POLICY "Public Upload"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id IN ('product-images', 'testimonial-audios', 'uploads'));

CREATE POLICY "Public Update"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id IN ('product-images', 'testimonial-audios', 'uploads'));

CREATE POLICY "Public Delete"
ON storage.objects FOR DELETE
TO public
USING (bucket_id IN ('product-images', 'testimonial-audios', 'uploads'));