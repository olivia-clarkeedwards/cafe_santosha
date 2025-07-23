import Image from 'next/image'
import {
  Marquee,
  ScrollingTextBannerWrapper,
} from 'components/scrolling-text-banner'

export default function Home() {
  return (
    <div className="content-wrapper">
      <ScrollingTextBannerWrapper>
        <Marquee repeat={2}>
          <p className="uppercase text-2xl">
            Sunday sessions: Live music, drinks, and good vibes from 3pm - 6pm
            every Sunday!
          </p>
        </Marquee>
      </ScrollingTextBannerWrapper>
      <Image
        src="/cafe.jpg"
        alt="Cafe Santosha"
        width={800}
        height={400}
        style={{ width: '100%', height: 'auto' }}
      />
      <ScrollingTextBannerWrapper>
        <Marquee repeat={10}>
          <p className="uppercase text-2xl">CAFE SANTOSHA</p>
        </Marquee>
      </ScrollingTextBannerWrapper>
      <div>Sunday sessions banner</div>
      <div>Main image with logo</div>
      <div>Santosha banner</div>
      <div>Contact and hours with cute animation</div>
      <div>Santosha banner</div>
      <div>Socials</div>
      <header>
        <h1>Cafe Santosha</h1>
        <div className="definition">
          <h2 className="definition">santosha</h2>
          <p>skt. संतोष saṃtoṣa</p>
          <p>noun</p>
          <p>deep, abiding, everlasting contentment.</p>
        </div>
      </header>
      <div className="content">
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
      </div>
    </div>
  )
}
