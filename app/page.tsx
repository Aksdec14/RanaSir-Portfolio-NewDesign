import React from 'react'
import Hero from './component/Hero'
import RecognitionBand from './component/RecognitionBand'
import About from './component/About'
import HowIWork from './component/Howiwork'
import ToolsWontReach from './component/Toolswontreach'
import WhereIFit from './component/Whereifit'
import Proof from './component/Proof'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Reveal from './component/Reveal'
import Testimonials from './component/Testimonials'

const page = () => {
  return (
    <div>
      <Reveal direction="left"><Hero /></Reveal>
      <About />
      <RecognitionBand />
      <Reveal direction="right"><WhereIFit /></Reveal>
      <HowIWork />
      <Proof />
      <Reveal direction="right"><Contact /></Reveal>
      <Testimonials />
      <Footer />
    </div>
  )
}

export default page
