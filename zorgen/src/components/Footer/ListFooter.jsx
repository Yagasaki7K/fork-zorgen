import React from 'react'

export default function ListFooter() {
    const ListFooter = ['Serviços', 'Sobre', 'Trabalhe Conosco', 'Contato', 'Área do Cliente']

  return (
    <ul className='justify-end text-sm font-medium text-texto_final mb-3 sm:flex'>
        {ListFooter.map((item, index) => (
            <li key={index} className="hover:underline mx-2">
                <a href="#">{item}</a>
            </li>
        ))}
    </ul>
    // usei o .map para percorrer a const, e joguei os itens dentro da li para não precisar ficar estilizando um por um.
    // 
  )
}
