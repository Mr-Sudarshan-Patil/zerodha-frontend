import React from 'react'
import Awards from './Awards'
import Education from './Education'
import Navbar from '../Navbar.js'
import Pricing from './Pricing'
import Stats from './Stats'
import Openaccount from "../Openaccount.js"
import Footer from '../Footer.js'
import HeroSec from './HeroSec.js'

function HomePage() {
  return (
    <div>
      <HeroSec/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <Openaccount/> 
    </div>
  )
}

export default HomePage
