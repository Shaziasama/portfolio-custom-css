import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <Image src="/image/rem.webp" alt="my-pic" width={300} height={300} className="rounded-full" />
      </div>
      <div className="hero-right">
        <h2>
          Hello <br />
          I am <br />
          Shazia Samma
        </h2>
        <div className="buttons">
          <button><Link href="/about">About Me</Link></button>
          <button><Link href="/contact">Contact Me</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
