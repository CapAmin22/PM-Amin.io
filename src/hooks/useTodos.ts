import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Todo } from '../lib/supabase'
import { useAuth } from '../lib/AuthContext'

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      setTodos([])
      setLoading(false)
      return
    }

    // Initial fetch
    fetchTodos()

    // Set up real-time subscription
    const subscription = supabase
      .channel('todos')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'todos',
          filter: `user_id=eq.${user.id}`,
        },
        () => {
          fetchTodos()
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [user])

  const fetchTodos = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setTodos(data || [])
    } catch (error) {
      console.error('Error fetching todos:', error)
    } finally {
      setLoading(false)
    }
  }

  const addTodo = async (title: string) => {
    try {
      const { error } = await supabase.from('todos').insert([
        {
          title,
          user_id: user?.id,
          completed: false,
        },
      ])
      if (error) throw error
    } catch (error) {
      console.error('Error adding todo:', error)
    }
  }

  const toggleTodo = async (id: string, completed: boolean) => {
    try {
      const { error } = await supabase
        .from('todos')
        .update({ completed })
        .eq('id', id)
        .eq('user_id', user?.id)
      if (error) throw error
    } catch (error) {
      console.error('Error toggling todo:', error)
    }
  }

  const deleteTodo = async (id: string) => {
    try {
      const { error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id)
        .eq('user_id', user?.id)
      if (error) throw error
    } catch (error) {
      console.error('Error deleting todo:', error)
    }
  }

  return {
    todos,
    loading,
    addTodo,
    toggleTodo,
    deleteTodo,
  }
} 