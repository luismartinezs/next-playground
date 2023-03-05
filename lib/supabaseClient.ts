import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://rmrycmrygpqfzmsftzhu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtcnljbXJ5Z3BxZnptc2Z0emh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc5Nzg1MzYsImV4cCI6MTk5MzU1NDUzNn0.4OwrWFXCCk1e8ummE726e9-ZI7rRaDZeADtTFUcQizI')