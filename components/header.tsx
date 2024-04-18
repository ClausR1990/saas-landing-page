import { BadgeDollarSign } from 'lucide-react'
import { Navigation } from './navigation'
import { ModeToggle } from './ui/mode-toggle'

export const Header = () => {
  return (
    <header className='gradient-bottom fixed z-[1000] w-full border-b border-muted p-4 transition-all duration-150 hover:bg-background'>
      <div className='container flex max-w-full flex-wrap items-center justify-between'>
        <BadgeDollarSign />
        <Navigation />
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
