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

const page = () => {
  return (
    <div>
      <Hero />
      <RecognitionBand />
      <About />
      <HowIWork />
      <ToolsWontReach />
      <WhereIFit /> 
      <Proof />
      <Contact /> 
      <Footer />
    </div>
  )
}

export default page