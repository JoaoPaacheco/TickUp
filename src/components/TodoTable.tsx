import { Trash2 } from 'lucide-react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useTodos } from '../hooks/useTodos'
import type { Todo } from '../types/todo'
import type { ColumnDef } from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const TodoTable = () => {
  const { todos, updateTodo, deleteTodo } = useTodos()

  const columns: Array<ColumnDef<Todo>> = [
    {
      id: 'checkbox',
      header: '',
      size: 50,
      cell: ({ row }) => {
        const todo = row.original
        return (
          <div className="flex items-center justify-center">
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() =>
                updateTodo.mutate({ ...todo, completed: !todo.completed })
              }
              aria-label={`Marcar ${todo.title} como concluído`}
            />
          </div>
        )
      },
    },
    {
      accessorKey: 'id',
      header: 'ID',
      size: 250,
      cell: ({ getValue }) => (
        <span className="text-xs text-muted-foreground">
          {getValue<string>()}
        </span>
      ),
    },
    {
      accessorKey: 'title',
      header: 'Título',
      cell: ({ getValue }) => <span>{getValue<string>()}</span>,
      meta: { className: 'w-full' },
    },
    {
      id: 'status',
      header: 'Status',
      size: 120,
      cell: ({ row }) => {
        const completed = row.original.completed
        return (
          <div className="flex justify-center">
            <Badge
              variant={completed ? 'default' : 'secondary'}
              className={completed ? 'text-accent' : ''}
            >
              {completed ? 'Concluído' : 'Pendente'}
            </Badge>
          </div>
        )
      },
    },
    {
      id: 'actions',
      header: 'Ações',
      size: 80,
      cell: ({ row }) => {
        const todo = row.original
        return (
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteTodo.mutate(todo.id)}
              aria-label={`Excluir ${todo.title}`}
            >
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        )
      },
      meta: { className: 'w-20 text-center' },
    },
  ]

  const table = useReactTable({
    data: todos,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                className={header.column.columnDef.meta?.className as string}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className={cell.column.columnDef.meta?.className as string}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={columns.length}
              className="text-center text-sm text-muted-foreground"
            >
              Nenhuma tarefa encontrada.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
