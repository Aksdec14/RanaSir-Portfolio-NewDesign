import React from 'react'
import Hero from './component/Hero'
import RecognitionBand from './component/RecognitionBand'
import About from './component/About'
import HowIWork from './component/Howiwork'
import ToolsWontReach from './component/Toolswontreach'
import WhereIFit from './component/Whereifit'
import Proof from './component/Proof'

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
    </div>
  )
}

export default page