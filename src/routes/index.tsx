import { createFileRoute } from '@tanstack/react-router'
import { TodoForm } from '../components/TodoForm'
import { Header } from '@/components/Header'
import { TodoTable } from '@/components/TodoTable'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <Header />
      <main className="flex-1">
        <div className="max-w-5xl m-auto">
          <TodoForm />
          <TodoTable />
        </div>
      </main>
      <Footer />
    </div>
  )
}
