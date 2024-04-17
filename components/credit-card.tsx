import { cn } from '@/lib/utils'
import { SVGProps } from 'react'

export const CreditCard = ({ className }: { className?: string }) => {
  return (
    <div
      aria-hidden='true'
      className={cn(
        'flex aspect-[1.636/1] w-[400px] max-w-full flex-col justify-between gap-3 overflow-hidden rounded-xl border border-muted bg-card/30 p-4 backdrop-blur-md md:p-6',
        className
      )}
    >
      <div className='flex items-end justify-end'>
        <MasterCardLogo className='-my-3 !h-auto w-12 md:w-16' />
      </div>
      <div className='flex flex-col space-y-3'>
        <Chip className='h-auto w-10 fill-orange-300 md:w-12' />
        <div className='flex items-center gap-3 font-mono text-xl text-foreground/80 drop-shadow-lg'>
          <span>4242</span>
          <span>4242</span>
          <span>4242</span>
          <span>4242</span>
        </div>
        <div className='flex items-center gap-3 font-mono text-xs uppercase text-foreground/50'>
          <span>exp 12/24</span>
          <span>CVC 123</span>
        </div>
      </div>
    </div>
  )
}

const Chip: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      height='800px'
      width='800px'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 511 511'
      {...props}
    >
      <g>
        <path
          d='M455.5,56h-400C24.897,56,0,80.897,0,111.5v288C0,430.103,24.897,455,55.5,455h400c30.603,0,55.5-24.897,55.5-55.5v-288
   C511,80.897,486.103,56,455.5,56z M464,248H343v-56.5c0-4.687,3.813-8.5,8.5-8.5H464V248z M343,263h121v65H343V263z M479,223h17v65
   h-17V223z M479,208v-65h17v65H479z M464,168H351.5c-12.958,0-23.5,10.542-23.5,23.5V408H183V103h272.5c4.687,0,8.5,3.813,8.5,8.5
   V168z M168,248H47v-65h121V248z M32,288H15v-65h17V288z M47,263h121v65H47V263z M263,88V71h137v17H263z M248,88H111V71h137V88z
    M168,103v65H47v-56.5c0-4.687,3.813-8.5,8.5-8.5H168z M32,208H15v-65h17V208z M15,303h17v65H15V303z M47,343h121v65H55.5
   c-4.687,0-8.5-3.813-8.5-8.5V343z M248,423v17H111v-17H248z M263,423h137v17H263V423z M343,408v-65h121v56.5
   c0,4.687-3.813,8.5-8.5,8.5H343z M479,303h17v65h-17V303z M496,111.5V128h-17v-16.5c0-12.958-10.542-23.5-23.5-23.5H415V71h40.5
   C477.832,71,496,89.168,496,111.5z M55.5,71H96v17H55.5C42.542,88,32,98.542,32,111.5V128H15v-16.5C15,89.168,33.168,71,55.5,71z
    M15,399.5V383h17v16.5c0,12.958,10.542,23.5,23.5,23.5H96v17H55.5C33.168,440,15,421.832,15,399.5z M455.5,440H415v-17h40.5
   c12.958,0,23.5-10.542,23.5-23.5V383h17v16.5C496,421.832,477.832,440,455.5,440z'
        />
      </g>
    </svg>
  )
}

const MasterCardLogo: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width='800px'
      height='800px'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g fill='none' fillRule='evenodd'>
        <circle cx='7' cy='12' r='7' fill='#EA001B' />
        <circle cx='17' cy='12' r='7' fill='#FFA200' fillOpacity='.8' />
      </g>
    </svg>
  )
}
