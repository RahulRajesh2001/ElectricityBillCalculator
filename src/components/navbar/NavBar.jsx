import React from 'react'

const NavBar = () => {
  return (
    <div>
      <div className='vvsm:h-[80px] md:h-[110px] bg-[#f8f9fa] flex items-center'>
        <img
          src='https://bills.kseb.in/eb.png'
          alt='kseb_image'
          className='ml-5 cursor-pointer vvsm:w-[90px] vvsm:h-[50px] md:w-[200px] md:h-[80px]'
        />
      </div>
    </div>
  )
}

export default NavBar
