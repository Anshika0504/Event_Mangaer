// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <section className='hero'>
      <img src="/restaurant.png" alt="resturant"></img>
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>We believe that it is all about the bid dream and the small details.</p>
          <Link to="contact" spy={true} duration={500}>Book Now</Link>
        </div>
      </div>
      
    </section>
  )
}

export default HeroSection
