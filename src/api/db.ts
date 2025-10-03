import type { createTodoDto } from '../dto/createTodoDto'
import type { Todo } from '../types/todo'

const STORAGE_KEY = 'todos'

async function getStoredTodos(): Promise<Array<Todo>> {
  const data = await localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

async function saveTodos(todos: Array<Todo>) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))),
      100,
    )
  })
}

export const db = {
  getAll: async (): Promise<Array<Todo>> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(getStoredTodos()), 300)
    })
  },

  getById: async (id: string): Promise<Todo | undefined> => {
    const todos = await getStoredTodos()
    return todos.find((t) => t.id === id)
  },

  create: async (dto: createTodoDto): Promise<Todo> => {
    const todos = await getStoredTodos()
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: dto.title,
      completed: false,
    }
    todos.push(newTodo)
    await saveTodos(todos)
    return newTodo
  },

  update: async (updated: Todo): Promise<Todo> => {
    let todos = await getStoredTodos()
    todos = todos.map((t) => (t.id === updated.id ? updated : t))
    saveTodos(todos)
    return updated
  },

  delete: async (id: string): Promise<void> => {
    const todos = await getStoredTodos()
    const filteredTodos = todos.filter((t) => t.id !== id)
    saveTodos(filteredTodos)
  },
}
