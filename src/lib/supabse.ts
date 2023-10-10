import { createClient } from "@supabase/supabase-js";

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(
  "https://edtgjtviwuuxvqscshte.supabase.co",
  supabaseKey
);
