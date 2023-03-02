import React from 'react'
import Logo from '../Header/components/Logo'
import ListFooter from './ListFooter'
import ListSection from './ListSection'

export default function Footer() {
  return (
    <>
      <div className='mx-6'>
        <Logo isFooter={true} />
      </div>
      <div className='mt-7 mx-7 text-texto_final mb-5'>
        <p className='text-xs font-medium'>"Cuidar dos nossos clientes e parceiros sempre fez parte Growtech e agora faz parte da nossa nova identidade também: "Zorgen", que significa "cuidar", é o nosso novo nome, nossa nova proposta pra cuidar ainda melhor da sua empresa!</p>
      </div>
      <ListSection />
      <div className='flex row flex-wrap mx-7'>
      <ListFooter />
        <p className='flex-1 font-normal text-xs text-titulos sm:text-center sm:mb-5 ml-12'>
          Zorgen Tecnologia LTDA.
          CNPJ 55555555555.
          Todos os direitos reservados
        </p>
        
      </div>
    </>
  )
}
