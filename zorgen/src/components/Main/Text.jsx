import React from 'react'

export default function Text({title, text}) {
  return (
    <>
    <h1 className='text-center text-lg font-bold text-titulos'>
        {title}
    </h1>
    <p className='text-center px-6 pt-2 text-textos font-normal sm:mx-20 lg:mx-72'>
        {text}
    </p>
    </>
  )
}
