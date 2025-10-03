import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { useTodos } from '../hooks/useTodos'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const schema = z.object({
  title: z.string().min(1, 'Informe um título'),
})

export const TodoForm = () => {
  const { createTodo } = useTodos()

  const form = useForm({
    defaultValues: { title: '' },
    validators: {
      onChange: schema,
    },
    onSubmit: async ({ value }) => {
      await createTodo.mutateAsync({ title: value.title })
      form.reset()
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="flex gap-2 mb-4 items-start"
    >
      <form.Field
        name="title"
        children={(field) => (
          <div className="flex-1 space-y-1">
            <Input
              name={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              placeholder="Nova tarefa..."
              aria-invalid={!field.state.meta.isValid}
              aria-describedby="title-error"
            />
            {!field.state.meta.isValid && (
              <p id="title-error" className="text-xs text-destructive">
                {field.state.meta.errors.join(', ')}
              </p>
            )}
          </div>
        )}
      />

      <Button
        type="submit"
        disabled={!form.state.canSubmit || createTodo.isPending}
        className="text-accent"
      >
        {createTodo.isPending ? 'Adicionando...' : 'Adicionar'}
      </Button>
    </form>
  )
}
