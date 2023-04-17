import React from 'react';

import logo from '../../../../assets/images/logo.png';
import logoComTexto from '../../../../assets/images/logo-footer.svg';



export default function Logo({ isFooter }) {
    return (
        <div className="flex items-center">
            <span className="pl-2">
                <a href="/">
                    <img src={isFooter ? logoComTexto : logo} />
                </a>
            </span>
        </div>
    )
}