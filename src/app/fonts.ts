import { Seaweed_Script, Sora } from 'next/font/google'

export const seaweedScript = Seaweed_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-seaweed-script',
})

export const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sora',
})
