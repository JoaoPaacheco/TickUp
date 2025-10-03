import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { db } from '../api/db'

const QUERY_KEY = 'todos'

export const useTodos = () => {
  const queryClient = useQueryClient()

  const { data: todos = [], ...query } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: db.getAll,
  })

  const createTodo = useMutation({
    mutationFn: db.create,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })

  const updateTodo = useMutation({
    mutationFn: db.update,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })

  const deleteTodo = useMutation({
    mutationFn: db.delete,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })

  return {
    todos,
    query,
    createTodo,
    updateTodo,
    deleteTodo,
  }
}
