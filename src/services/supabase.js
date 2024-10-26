import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yjcztpbgwzurdruimdhh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqY3p0cGJnd3p1cmRydWltZGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NTUwOTcsImV4cCI6MjA0NTUzMTA5N30.kwNpUX65EkXOYP61K9JlH0Um4jkg0Tga11Rzw4xl8lQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
