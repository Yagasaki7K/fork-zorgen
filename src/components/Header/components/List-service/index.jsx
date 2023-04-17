import React from 'react'
import ListItem from './ListItem';

const menuItems = [
    { title: 'PROJETOS', link: '#text_projetos' },
    { title: 'CONTATO', link: '#text_contato' },
];

export default function ListServices() {
    return (
        <div className="sm:flex sm:items-center sm:w-auto hidden sm:text-sm md:text-base" id="nav-content">
            <ul className="sm:flex justify-end items-center">
                {menuItems.map(menuItem => {
                    return (
                        <ListItem key={menuItem.title} service={menuItem.title} link={menuItem.link} />
                    )
                })}
            </ul>
        </div>
    )
}
