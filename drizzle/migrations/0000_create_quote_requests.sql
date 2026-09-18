CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  project_type text NOT NULL,
  message text,
  consent boolean NOT NULL DEFAULT false,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT quote_requests_name_length CHECK (char_length(name) BETWEEN 1 AND 100),
  CONSTRAINT quote_requests_phone_length CHECK (char_length(phone) BETWEEN 6 AND 30),
  CONSTRAINT quote_requests_email_length CHECK (email IS NULL OR char_length(email) <= 255),
  CONSTRAINT quote_requests_project_type_allowed CHECK (project_type IN ('Particulier - fenêtres et portes', 'Particulier - portail et clôture', 'Professionnel - sous-traitance de pose', 'Dépannage porte automatique', 'Autre')),
  CONSTRAINT quote_requests_message_length CHECK (message IS NULL OR char_length(message) <= 2000),
  CONSTRAINT quote_requests_consent_required CHECK (consent = true)
);

GRANT INSERT ON public.quote_requests TO anon, authenticated;
GRANT ALL ON public.quote_requests TO service_role;

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
ON public.quote_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(name) BETWEEN 1 AND 100
  AND char_length(phone) BETWEEN 6 AND 30
  AND (email IS NULL OR char_length(email) <= 255)
  AND project_type IN ('Particulier - fenêtres et portes', 'Particulier - portail et clôture', 'Professionnel - sous-traitance de pose', 'Dépannage porte automatique', 'Autre')
  AND (message IS NULL OR char_length(message) <= 2000)
  AND consent = true
);