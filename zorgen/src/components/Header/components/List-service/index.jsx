import React from 'react'
import ListItem from './ListItem';

const menuItems = ['SERVIÇOS', 'PORTFÓLIO', 'SOBRE', 'CONTATO'];

export default function ListServices() {
    return (
        <div className="sm:flex sm:items-center sm:w-auto hidden sm:text-sm md:text-base" id="nav-content">
            <ul className="sm:flex justify-end items-center">
                {menuItems.map(menuItem => {
                    return (
                        <ListItem key={menuItem} service={menuItem} />
                    )
                })}
            </ul>
        </div>
    )
}