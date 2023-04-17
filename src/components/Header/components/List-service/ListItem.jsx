import React from 'react';

export default function ListItem({ service, link }) {
  return (
    <li className="flex mx-3 hover:underline mb-4 sm:mb-0">
        <a className="text-titulos inline-block"
            href={link}>{service}</a>
    </li>
  )
}