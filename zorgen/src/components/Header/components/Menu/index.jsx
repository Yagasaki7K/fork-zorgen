import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import ListItem from '../List-service/ListItem';

export default function Menu() {
  const menuItems = ['SERVIÇOS', 'PORTFÓLIO', 'SOBRE', 'CONTATO'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // usei o false para o menu n renderizar a lista quando entrar na pag

  return (
    <div className="relative sm:hidden sm:items-center sm:w-auto sm:text-sm md:text-base" id="nav-content">
      <button
        id="nav-toggle"
        className="items-center px-3 py-2 text-black"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          // defina o isMenuOpen
          // usei o !isMenuOpen para dizer que quando clicar quero mudar se for true ou false
          // ! foi usado para dizer que se tiver false, fique true ou vice-versa
        }}>

        <Bars3Icon className="h-7 w-7" />
      </button>

      {isMenuOpen && (
        // Ela verifica se a variável isMenuOpen é true. Se for true, o código dentro dos parênteses é executado. Se for false, o código dentro dos parênteses é ignorado.
        <ul id="nav-content" className="absolute top-10 right-0 bg-white w-48 py-2 rounded-xl shadow-lg">
          {menuItems.map(menuItem => {
            return (
              <ListItem key={menuItem} service={menuItem} />
            )
          })}
        </ul>
      )}
    </div>
  )
}