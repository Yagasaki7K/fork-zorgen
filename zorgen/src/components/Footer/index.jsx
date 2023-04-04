import React from 'react'
import Logo from '../Header/components/Logo'
import ListFooter from './ListFooter'
import ListSection from './ListSection'

export default function Footer() {
  return (
    <>
      <div className='mx-6 border-t border-borda pt-4'>
        <Logo isFooter={true} />
      </div>

      <div className='mt-7 mx-7 text-texto_final mb-5 sm:w-2/4'>
        <p className='text-xs font-medium'>"Cuidar dos nossos clientes e parceiros sempre fez parte Growtech e agora faz parte da nossa nova identidade também: "Zorgen", que significa "cuidar", é o nosso novo nome, nossa nova proposta pra cuidar ainda melhor da sua empresa!</p>
      </div>
      <ListSection />

      <div className='flex justify-end'>
        <ListFooter />
      </div>

      <div className='mx-9 flex justify-center pr-1 mb-1'>
        <p className='font-normal text-text_footer sm:mt-8 sm:mb-3'>
          Zorgen Tecnologia LTDA.
          CNPJ 30.164.142/0001-55.
          Todos os direitos reservados
        </p>
      </div>
    </>
  )
}
