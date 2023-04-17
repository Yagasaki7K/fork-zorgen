import React from 'react'

export default function Input({ type, placeholder, required, onChange }) {
  // passei as props que eu quero poder alterar e reutilizar
  // reutilizei elas no index, e mudei o valor do type e placeholder
  return (
    <input className='mb-4 h-12 bg-cinza_input shadow-md w-full pl-4 text-caixa_text'
      type={type}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
