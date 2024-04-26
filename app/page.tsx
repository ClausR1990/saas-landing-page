import { CardBackground } from '@/components/graphics/card-background'
import { Hero } from '@/components/hero'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import People from '@/public/people.webp'

export default function Home() {
  return (
    <>
      <Hero />
      <main className=''>
        <section className='container py-12 md:py-48'>
          <div className='grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6'>
            <Card
              heading='01'
              title='Card number 1'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel diam ac nulla faucibus tempus. Curabitur gravida efficitur convallis. Proin facilisis hendrerit sapien id molestie.'
            />
            <Card
              heading='02'
              title='Card number 2'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel diam ac nulla faucibus tempus. Curabitur gravida efficitur convallis.'
              highlight
            />
            <Card
              heading='03'
              title='Card number 3'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel diam ac nulla faucibus tempus. Curabitur gravida efficitur convallis. Proin facilisis hendrerit sapien id molestie. Fusce a consequat justo.'
            />
          </div>
        </section>
        <section className='container pb-12'>
          <div className='flex flex-col items-center gap-12 md:flex-row'>
            <div className='prose prose-invert max-w-2xl shrink-0 lg:prose-2xl'>
              <h2>Never letting friends skip out on the bill again</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo.
              </p>
            </div>
            <div className='flex gap-6'>
              <div className='pt-48'>
                <Image
                  src={People}
                  alt='People at cafe'
                  className='aspect-[3/5] rounded-xl object-cover'
                />
              </div>
              <div className='space-y-6'>
                <Image
                  src={People}
                  alt='People at cafe'
                  className='aspect-[3/5] rounded-xl object-cover'
                />
                <Image
                  src={People}
                  alt='People at cafe'
                  className='aspect-[3/5] rounded-xl object-cover'
                />
              </div>
              <div className='pt-24'>
                <Image
                  src={People}
                  alt='People at cafe'
                  className='aspect-[3/5] rounded-xl object-cover'
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

type CardProps = {
  heading?: string
  title: string
  description: string
  highlight?: boolean
  className?: string
}
const Card = ({
  title,
  heading,
  description,
  highlight,
  className,
}: CardProps) => (
  <div
    className={cn(
      highlight && 'gradient-diagonal',
      'group relative col-span-2 aspect-auto overflow-hidden p-[1px] transition-all duration-150 hover:bg-muted',
      className
    )}
  >
    {highlight && (
      <CardBackground className='absolute bottom-0 left-0 z-10 aspect-[3/5] h-auto w-full object-cover' />
    )}
    <div className='relative z-20 flex h-full flex-col gap-6 p-4 transition-all duration-150 group-hover:mb-0 group-hover:mt-0 md:-mt-16 md:mb-16 md:p-8'>
      {heading && (
        <span className='font-mono text-xl font-thin transition-all duration-150'>
          {heading}
        </span>
      )}
      <h2 className='text-2xl font-extrabold'>{title}</h2>
      <p className='mt-2 flex-1 text-foreground/70'>{description}</p>
    </div>
  </div>
)
