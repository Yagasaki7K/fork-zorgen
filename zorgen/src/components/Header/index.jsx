import React from 'react';
import Logo from '../../components/Header/components/Logo';
import Menu from '../Header/components/Menu';
import ListServices from '../Header/components/List-service';

export default function Header() {
    return (
        (
            <nav className="flex items-center justify-between mx-5 my-4 font-medium">
                <Logo />
                <Menu />
                <ListServices />
            </nav>
        )
    )
}
