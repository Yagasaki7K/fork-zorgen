import React from 'react'
import Text from './Text'

export default function index() {
    return (
        <div>
            <Text title="Conheça a Zorgen" text="Adoramos automatizar processos, tornando-os mais rápidos e confiáveis e menos sujeito a erros humanos. Estamos dispostos a encarar os desafios que forem necessários para criar um sistema feito sob medida para cada parceiro nosso atinja o sucesso que buscar." />
            <div className='border-t border-borda justify-center mx-6 sm:mx-28 md:mx-22 lg:mx-72 mt-14 mb-8'></div>
            <div className=''>
                <Text title="Nossos serviços" />
                <p className='text-center px-6 pt-2 text-textos font-normal sm:mx-20 lg:mx-72'>
                    Atendemos desde pequenas empresas familiares buscando "aparecer no google" até empresas maiores, que no geral, buscam informatizar processos internos e externos. Confirma algumas das nossas atuações:
                </p>
            </div>

        </div>
    )
}