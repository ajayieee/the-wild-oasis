
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://qnhzqalkekphzsxlpiha.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuaHpxYWxrZWtwaHpzeGxwaWhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTAwNDIsImV4cCI6MjA3MTg2NjA0Mn0.QGtok6FJaSLcQQMAlrGQ3T2fQ5LH2V1S8Pnncb38NFk'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;