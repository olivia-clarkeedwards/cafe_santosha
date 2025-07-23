import { cn } from 'lib/utils'
import { ComponentPropsWithoutRef } from 'react'

type ScrollingTextBannerProps = {
  children: React.ReactNode
}

export function ScrollingTextBannerWrapper({
  children,
}: ScrollingTextBannerProps) {
  return (
    <div
      id="scrolling-text-banner"
      className="bg-blue-500 py-2 text-white w-full text-nowrap overflow-x-hidden uppercase text-2xl"
    >
      {children}
    </div>
  )
}

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean
  /**
   * Number of times to repeat the content within each animated div
   * @default 6
   */
  repeat?: number
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 6,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden [--duration:40s] [--gap:2rem]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className
      )}
    >
      {/* Create 2 identical animated divs for seamless looping */}
      {[0, 1].map((divIndex) => (
        <div
          key={divIndex}
          className={cn('flex shrink-0 items-center whitespace-nowrap', {
            'animate-marquee': !vertical,
            'animate-marquee-vertical': vertical,
            'group-hover:[animation-play-state:paused]': pauseOnHover,
            '[animation-direction:reverse]': reverse,
          })}
          style={{
            minWidth: '100%',
          }}
        >
          {/* Repeat the children content within this div */}
          {Array(repeat)
            .fill(0)
            .map((_, i) => (
              <span
                key={i}
                className="flex items-center"
                style={{
                  paddingRight: 'var(--gap)',
                }}
              >
                {children}
              </span>
            ))}
        </div>
      ))}
    </div>
  )
}
