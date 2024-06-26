import React, { useState } from 'react'
import NavBar from './components/navbar/NavBar'
import CalculatorSection from './components/calc_section/CalculatorSection'

const App = () => {
  return (
    <div className='h-screen w-[100%]'>
      <NavBar />
      <div className='flex justify-center items-center gap-10 mt-8'>
        <CalculatorSection />
      </div>
    </div>
  )
}

export default App
