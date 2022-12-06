import React from 'react'
import { GiStripedSun } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className='w-full py-8 m-auto bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)]'>
         <div className='flex items-center justify-center m-auto'>
            <GiStripedSun size={30} className='mr-2 text-white'/>
            <h1 className='text-xl font-bold text-neutral-50'>TODEFERIAS</h1>
        </div>
    </footer>
  )
}

export default Footer;