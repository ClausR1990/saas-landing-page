import { CreditCard } from './credit-card'
import HeroBg from '@/public/hero-bg.webp'
import Image from 'next/image'
import { Button } from './ui/button'

export const Hero = () => {
  return (
    <section className='gradient-bottom relative flex flex-col items-center justify-center space-y-6 overflow-hidden py-48'>
      <Image
        src={HeroBg}
        alt='Hero background'
        layout='fill'
        objectFit='cover'
        quality={100}
        placeholder='blur'
        priority
        className='absolute left-0 top-0 -z-20 size-full object-cover mix-blend-overlay dark:opacity-30 dark:mix-blend-normal'
      />
      <div className='container grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20'>
        <div className='prose lg:prose-2xl'>
          <h1 className='text-foreground'>Welcome to the future of banking</h1>
          <p className='text-foreground/80'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo.
          </p>
        </div>
        <div className='flex flex-col items-end gap-3'>
          <CreditCard />
          <p className='text-center text-foreground/80'>
            Your card is safe with us
          </p>
        </div>
      </div>
      <Button variant='outline' size='lg'>
        Get Started for free
      </Button>
    </section>
  )
}
