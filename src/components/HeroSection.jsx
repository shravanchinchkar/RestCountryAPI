import React from 'react'
import HeroHeader from './HeroHeader'
import HeroMain from './HeroMain'
import DropDown from './DropDown'

const HeroSection = () => {
  return (
    <div className='relative'>
      <HeroHeader/>
      <DropDown/>
      <HeroMain/>
    </div>
    
  )
}

export default HeroSection
