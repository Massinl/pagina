import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xnohmkyksckbrrrmpjed.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhub2hta3lrc2NrYnJycm1wamVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMzg0MTAsImV4cCI6MjA3NjgxNDQxMH0.1qLRxmz3qcycDd8f6xB_Wn-fi1NwBiJFqjfkUXUH_Cg';

export const supabase = createClient(supabaseUrl, supabaseKey);
