import React from 'react'
import LogoTipo from '../../assets/images/banner-tablet.svg'
import LogoDesktop from '../../assets/images/banner.svg'

export default function Banner() {
  return (
    <div className='w-full h-auto  mb-9'>
        <img className='md:hidden' src={LogoTipo} alt="" />
        <img className='hidden md:block' src={LogoDesktop} alt="" />
    </div>
  )
}
