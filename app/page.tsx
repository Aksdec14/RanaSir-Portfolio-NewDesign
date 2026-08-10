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

const page = () => {
  return (
    <div>
      <Reveal direction="left"><Hero /></Reveal>
      <RecognitionBand />
      <About />
      <HowIWork />
      <Reveal direction="left"><ToolsWontReach /></Reveal>
      <Reveal direction="right"><WhereIFit /></Reveal>
      <Proof />
      <Reveal direction="right"><Contact /></Reveal>
      <Footer />
    </div>
  )
}

export default page
