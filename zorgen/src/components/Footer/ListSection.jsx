import React from 'react'
import IconLinkedin from '../../assets/images/carbon_logo-linkedin.png'
import IconWpp from '../../assets/images/carbon_logo-wpp.png'

const numeroTelefone = '5555991748807'
const url = `https://wa.me/${numeroTelefone}`;

export default function ListSection() {
  return (
    <section className='flex justify-center sm:justify-start mb-7'>
      <a href="https://br.linkedin.com/company/zorgen?trk=public_profile_topcard-current-company" target='_blank'><img className='mx-3 sm:mx-1 sm:ml-7' src={IconLinkedin} alt="Icone do Linkedin" /></a>
      <a href={url} target='_blank'><img className='mx-3 sm:mx-1' src={IconWpp} alt="Icone do Whatsapp" /></a>
    </section>
  )
}
