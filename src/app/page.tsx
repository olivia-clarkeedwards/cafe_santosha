import Image from 'next/image'
import {
  Marquee,
  ScrollingTextBannerWrapper,
} from 'components/scrolling-text-banner'
import { seaweedScript, sigmar } from './layout'

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
          src="/tea-gold.jpg"
          alt="Cafe Santosha"
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />{' '}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className={`text-9xl text-white ${seaweedScript.className}`}>
            Cafe Santosha
          </h1>
        </div>
        <p className="absolute bottom-1.5 right-1.5 text-stone-100 text-xs">
          Photo by{' '}
          <a href="https://unsplash.com/@struvictoryart?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Victoria Strukovskaya
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/photos/white-and-brown-ceramic-teacup-on-table-XdPa9HTknDM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </p>
      </div>

      <ScrollingTextBannerWrapper className="bg-yellow-500 text-amber-800">
        <Marquee repeat={3} reverse={true}>
          <p>SANTOSHA: deep, abiding, everlasting contentment</p>
        </Marquee>
      </ScrollingTextBannerWrapper>
      <div className="h-[calc(100vh-8rem)] py-20 w-full bg-amber-50 justify-center items-center flex flex-col text-amber-800">
        <h1 className={`text-7xl ${seaweedScript.className}`}>Cafe Santosha</h1>
        <Image
          src="/cafe-santosha-logo.png"
          alt="Cafe Santosha Logo"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div
          className={`flex w-full justify-evenly items-center text-center uppercase text-xl ${sigmar.className}`}
        >
          <p className="max-w-1/4">
            36 George Street
            <br />
            Port Chalmers
          </p>
          <p className="max-w-1/4">
            8am - 4pm
            <br /> Monday to Friday{' '}
          </p>
          <p className="max-w-1/4">0210 836 1524</p>
          <p className="max-w-1/4">cafe_santosha@outlook.com</p>
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
