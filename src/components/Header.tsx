import { ModeToggle } from './ModeToggle'
import { TickUpLogo } from './TickUp'

export function Header() {
  return (
    <header className="container p-4 flex items-center justify-between m-auto">
      <TickUpLogo className="h-8 text-primary" />
      <ModeToggle />
    </header>
  )
}
