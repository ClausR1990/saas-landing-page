import { SVGProps } from 'react'

export const CardBackground: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width='500'
    height='500'
    viewBox='0 0 500 500'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_2_2)'>
      <mask
        id='mask0_2_2'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='500'
        height='500'
      >
        <rect width='500' height='500' fill='white' />
      </mask>
      <g mask='url(#mask0_2_2)'>
        <circle cx='32' cy='482' r='395.5' className='stroke-muted' />
        <circle
          cx='32'
          cy='482'
          r='213.5'
          className='stroke-muted'
          strokeLinecap='round'
          strokeDasharray='10 20'
        />
        <circle
          cx='32'
          cy='482'
          r='149.5'
          className='stroke-muted'
          strokeLinecap='round'
          strokeDasharray='10 20'
        />
        <circle
          cx='32'
          cy='482'
          r='298.5'
          className='stroke-muted'
          strokeLinecap='round'
          strokeDasharray='10 20'
        />
        <circle
          cx='83'
          cy='83'
          r='82.5'
          transform='matrix(-1 0 0 1 115 399)'
          className='stroke-muted'
        />
      </g>
    </g>
    <defs>
      <clipPath id='clip0_2_2'>
        <rect width='500' height='500' fill='white' />
      </clipPath>
    </defs>
  </svg>
)
