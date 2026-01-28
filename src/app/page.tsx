import Image from 'next/image'
import {
  Marquee,
  ScrollingTextBannerWrapper,
} from 'components/scrolling-text-banner'
import { seaweedScript, sora } from './layout'

export default function Home() {
  return (
    <div className="content-wrapper">
      <ScrollingTextBannerWrapper>
        <Marquee repeat={3}>
          <p>
            Sunday sessions: Live music, drinks, and good vibes from 3pm - 6pm
            every Sunday!
          </p>
        </Marquee>
      </ScrollingTextBannerWrapper>
      <div className="relative h-[calc(100vh-8rem)] w-full">
        <Image
          src="/blue-teapot.jpg"
          alt="Cafe Santosha"
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />{' '}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className={`text-5xl sm:text-7xl md:text-9xl text-white text-center ${seaweedScript.className}`}>
            Cafe Santosha
          </h1>
        </div>
        <p className="absolute bottom-1.5 right-1.5 text-stone-100 text-xs">
          Photo by <a href="https://unsplash.com/@timothycdykes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Timothy Dykes</a> on <a href="https://unsplash.com/photos/blue-and-white-floral-ceramic-teapot-Uj0HG1a4kF8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
      </div>

      <ScrollingTextBannerWrapper className="bg-auba text-viola">
        <Marquee repeat={3} reverse={true}>
          <p>SANTOSHA: deep, abiding, everlasting contentment</p>
        </Marquee>
      </ScrollingTextBannerWrapper>
      <div className="min-h-[calc(100vh-8rem)] py-12 md:py-20 px-4 w-full justify-center items-center flex flex-col text-auba bg-gradient-to-br from-primary to-primary/50">
        <Image
          src="/logo.png"
          alt="Cafe Santosha Logo"
          width={150}
          height={150}
          className="rounded-full rotate-180 rotate-180 w-20 h-10 sm:w-28 sm:h-14 md:w-[200px] md:h-[100px]"
        />
        <h1 className={`text-4xl sm:text-5xl md:text-7xl text-center ${seaweedScript.className}`}>Cafe Santosha</h1>
        <Image
          src="/logo.png"
          alt="Cafe Santosha Logo"
          width={150}
          height={150}
          className="rounded-full mb-8 md:mb-16 w-20 h-10 sm:w-28 sm:h-14 md:w-[200px] md:h-[100px]"
        />
        <div
          className={`flex flex-col md:flex-row flex-wrap w-full justify-center items-center text-center uppercase text-base sm:text-lg md:text-xl gap-6 md:gap-16 ${sora.className}`}
        >
          <div>
            <p className="text-center">
              36 George Street
              <br />
              Port Chalmers
            </p>
          </div>
          <div className="text-center">
            <p>
              8am - 4pm
              <br /> Monday to Friday
            </p>
          </div>
          <div className="text-center">
            <p>0210 836 1524<br />cafe_santosha@outlook.com</p>
          </div>
        </div>
      </div>
      <ScrollingTextBannerWrapper className="">
        <Marquee repeat={6}>
          <p>Ka kite anō: See you soon</p>
        </Marquee>
      </ScrollingTextBannerWrapper>
      {/* <div>Socials</div> */}
      {/* <header>
        <h1>Cafe Santosha</h1>
        <div className="definition">
          <h2 className="definition">santosha</h2>
          <p>skt. संतोष saṃtoṣa</p>
          <p>noun</p>
          <p>deep, abiding, everlasting contentment.</p>
        </div>
      </header> */}
      {/* <div className="content">
        <p>
          Enjoy the rustic ambiance of this hidden gem, warm welcoming staff,
          <br />
          Good Fortune coffee and a cabinet bursting with freshly baked goods.
        </p>
        <p>
          <i>Available for functions and events.</i>
        </p>
        <p>
          <b>Sunday Sessions:</b> Pop in for live music, a drink and a bite to
          eat. 3pm - 6pm every Sunday.
        </p>
        <footer className="contact-details">
          <a
            href="https://www.google.com/maps/place/Cafe+Santosha/@-45.8160219,170.6209632,17z/data=!3m1!4b1!4m6!3m5!1s0xa8294d4fb9e58ac5:0x5f410a1b27ada69f!8m2!3d-45.8160219!4d170.6209632!16s%2Fg%2F11cly85dhg?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            36 George Street <br />
            Port Chalmers
            <br />
            Down the alleyway
          </a>
          <a href="tel:+642108361524">0210 836 1524</a>

          <a href="mailto:cafe_santosha@outlook.com?subject=Website%20enquiry?body=Hi%20Cafe%20Santosha%2C%0A%0A">
            cafe_santosha@outlook.com
          </a>
        </footer>
      </div> */}
    </div>
  )
}
