import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import ListItem from '../List-service/ListItem';

export default function Menu() {
  const menuItems = [
    { title: 'PROJETOS', link: '#text_projetos' },
    { title: 'CONTATO', link: '#text_contato' },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative sm:hidden sm:items-center sm:w-auto sm:text-sm md:text-base" id="nav-content">
      <button
        id="nav-toggle"
        className="items-center px-3 py-2 text-black"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}>
        <Bars3Icon className="h-7 w-7" />
      </button>

      {isMenuOpen && (
        <ul id="nav-content" className="absolute top-10 right-0 bg-white w-48 py-2 rounded-xl shadow-lg">
          {menuItems.map(menuItem => {
            return (
              <ListItem key={menuItem.title} service={menuItem.title} link={menuItem.link} />
            )
          })}
        </ul>
      )}
    </div>
  )
}
