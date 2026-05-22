// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Progetto e chiave Anon di supabase
const supabaseUrl = 'https://ridtujvdsjonbbcrezdb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZHR1anZkc2pvbmJiY3JlemRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0MDQyMTAsImV4cCI6MjA5NDk4MDIxMH0.eVNnqEUTmeE8t26jrx0urblPXqiHurF5LFpfyKZFMwg';

export const supabase = createClient(supabaseUrl, supabaseKey);
