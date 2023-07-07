import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gysdqxtqklkfdvlcvhbw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5c2RxeHRxa2xrZmR2bGN2aGJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1NjMzMzcsImV4cCI6MjAwNDEzOTMzN30.4zCcp-kC97FO0MJB1YoskE7mN6u-El2s42K6Gj_2hAs'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase