export function Footer() {
  return (
    <footer className="p-4">
      <div className="container mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center justify-between gap-1 text-center md:text-left text-sm text-muted-foreground">
        <p>
          Desenvolvido por{' '}
          <span className="font-semibold">João Pedro Pacheco</span>&trade;
        </p>
        <p className="text-xs">
          {new Date().getFullYear()}&copy; Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
