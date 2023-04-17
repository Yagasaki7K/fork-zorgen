import React from 'react';
import Consultoria from '../../assets/images/ico-consultoria.png'
import ProdutosDigitais from '../../assets/images/ico-produtos-digitais.png'
import Ecommerce from '../../assets/images/ico-ecommerce.png'
import Integracoes from '../../assets/images/ico-integracoes.png'
import Sistemas from '../../assets/images/ico-sistemas.png'

export default function List() {
  return (
    <ul className="grid grid-cols-5 grid-rows-3 gap-0 mt-16 sm:flex sm:justify-around">
      <li className="col-start-2 col-end-3 row-start-1 row-end-2">
        <img src={Consultoria} alt="Icone Consultoria" />
        <h3 className='font-bold sm:text-xl text-titulos'>Consultoria</h3>
      </li>

      <li className="col-start-4 col-end-5 row-start-1 row-end-2">
        <img src={ProdutosDigitais} alt="Icone Produtos Digitais" />
        <h3 className='font-bold sm:text-xl text-titulos'>Produtos Digitais</h3>
      </li>

      <li className="col-start-2 col-end-3 row-start-3 row-end-4">
        <img src={Integracoes} alt="Icone Integrações" />
        <h3 className='font-bold sm:text-xl text-titulos'>Integrações</h3>
      </li>

      <li className="col-start-4 col-end-5 row-start-3 row-end-4">
        <img src={Sistemas} alt="Icone Sistemas" />
        <h3 className='font-bold sm:text-xl text-titulos'>Sistemas</h3>
      </li>

      <li className="col-start-3 col-end-4 row-start-2 row-end-3"><img src={Ecommerce} alt="Icone Ecommerce" />
        <h3 className='font-bold sm:text-xl text-titulos w-32'>E-commerce</h3>
      </li>
    </ul>
  );
}

