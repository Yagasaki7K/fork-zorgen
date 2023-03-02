import React from 'react'
import IconLinkedin from '../../assets/images/carbon_logo-linkedin.png'
import IconInstagram from '../../assets/images/carbon_logo-instagram.png'
import IconWpp from '../../assets/images/carbon_logo-wpp.png'

export default function ListSection() {
  return (
    <section className='flex justify-center sm:justify-start mb-7'>
        <a href="#"><img className='mx-3 sm:mx-1 sm:ml-7' src={IconLinkedin} alt="Icone do Linkedin" /></a>
        <a href="#"><img className='mx-3 sm:mx-1' src={IconInstagram} alt="Icone do Instagram" /></a>
        <a href="#"><img className='mx-3 sm:mx-1' src={IconWpp} alt="Icone do Whatsapp" /></a>
      </section>
  )
}
