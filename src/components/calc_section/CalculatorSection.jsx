import React, { useEffect, useState } from 'react'
import Generic_Section from '../generic_section/Generic_Section'
import Advanced_Section from '../advanced_section/Advanced_Section'
import axios from 'axios'
import Result_Section from '../result_sectioin/Result_Section'

const CalculatorSection = () => {
  //fetching tariff details from backend
  const [data, setData] = useState()
  useEffect(() => {
    axios
      .get('https://electricitycalculator.theneom.shop/tarif-details')
      .then((res) => {  
        setData(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  //state for the slider
  const [slide, setSlide] = useState('generic')

  //taking the result
  const [result, setResult] = useState({})

  return (
    <div className='w-[100%] h-full  flex justify-center items-center gap-10'>
      <div className='w-[40%] h-[500px] shadow-2xl rounded-sm '>
        {/*Top Section*/}
        <div className='h-[50px] bg-[#0395d9] flex items-center rounded-t-sm'>
          <div className='ml-5 text-xl font-semibold text-[#fff]'>
            Electricity Bill Calculator
          </div>
        </div>
        {/*Sider*/}
        <div className='h-[80px]  flex justify-center items-center '>
          <div
            className={`w-[45%] h-[50%] cursor-pointer rounded-sm flex justify-center items-center ${
              slide === 'generic'
                ? 'border border-b-0 '
                : 'border border-t-0 border-l-0 border-r-0 text-[#007bff]'
            }`}
            onClick={() => setSlide('generic')}
          >
            Generic
          </div>
          <div
            className={`w-[45%] h-[50%] cursor-pointer rounded-sm flex justify-center items-center ${
              slide === 'advanced'
                ? 'border border-b-0 '
                : 'border-t-0 border border-r-0 border-l-0 text-[#007bff]'
            }`}
            onClick={() => setSlide('advanced')}
          >
            Advanced
          </div>
        </div>
        <div className='flex justify-center items-center h-[73%]'>
          {slide === 'generic' ? (
            <Generic_Section data={data} setResult={setResult} />
          ) : (
            <Advanced_Section data={data} />
          )}
        </div>
      </div>
      {/*Result section */}

      <Result_Section billDetails={result} />
    </div>
  )
}

export default CalculatorSection
