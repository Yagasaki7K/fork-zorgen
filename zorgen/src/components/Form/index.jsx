import React from 'react'

export default function index() {
  return (
    <div className='sm:flex mt-24 sm:mx-32'>
      <div className='text-center mb-12 text-texto_final'>
        <h1 className='text-titulos text-4xl text-center mb-4'>Contato</h1>
        <p className='mb-9 mx-6  text-base'>Entre em contato com nosso consultor de vendas e descubra como podemos lhe ajudar a desenvolver sua solução de software</p>
        <p className='mb-3 text-lg'>55 991748807</p>
        <p className='text-lg'>contato@zorgen.tech</p>
      </div>
      <div className='flex flex-col mb-28'>
        <form className='block mx-6'>
          <input className='mb-4 h-12 bg-cinza_input shadow-md w-full pl-4 text-caixa_text focus:outline-none' type="text" required placeholder='Digite seu nome' />
          {/* lembrar que no focus eu tirei a borda do input */}

          <input className='mb-4 h-12 bg-cinza_input shadow-md w-full pl-4 text-caixa_text' type="email" required placeholder='Digite seu e-mail' />

          <input className='mb-4 h-12 bg-cinza_input shadow-md w-full pl-4 text-caixa_text' type="number" required placeholder='Celular' />

          <textarea className='bg-cinza_input pl-4 text-caixa_text w-full' cols="42" rows="5" defaultValue="Mensagem"></textarea>
        </form>
        <button className='text-xl font-semibold underline mt-4 lg:ml-auto lg:pr-8'>Enviar</button>
      </div>

    </div>
  )
}
