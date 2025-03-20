import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bzrjqiqlpwcxagclcuei.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6cmpxaXFscHdjeGFnY2xjdWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0OTk5NjQsImV4cCI6MjA1ODA3NTk2NH0.oQEFZnmj2waDwEbjA4h922VqYY-PXJFPBz4B-axs54o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactMessage = {
  id: string
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}

export type Todo = {
  id: string
  user_id: string
  title: string
  completed: boolean
  created_at: string
}

export type User = {
  id: string
  email: string
} 