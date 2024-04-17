'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <Button
      onClick={toggleTheme}
      variant='ghost'
      size='icon'
      className='relative'
    >
      <Sun className='h-4 w-4 rotate-0 scale-100 opacity-100 transition-all dark:-rotate-90 dark:scale-0 dark:opacity-0' />
      <Moon className='absolute h-4 w-4 rotate-90 scale-0 opacity-0 transition-all dark:rotate-0 dark:scale-100 dark:opacity-100' />
      <span className='sr-only'>Skift tema</span>
    </Button>
  )
}
