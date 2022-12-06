import React, { useState } from 'react';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { AiOutlineGlobal, AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    
  return (
    <section id='navbar' className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className='hidden sm:flex px-4'>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#pacotes">Pacotes</a>
            </li>
            <li>
                <a href="#booking">Reservar</a>
            </li>
            <li>
                <a href="#contato">Contato</a>
            </li>
        </ul>

        <div className='flex justify-between'>
            <a href="https://www.linkedin.com/in/gabrielghiaroni/" target="_blank" rel="noreferrer noopener"><BsLinkedin className='mx-4'/></a>
            <a href="https://api.whatsapp.com/send?phone=5521983617775" target="_blank" rel="noreferrer noopener"><BsWhatsapp className='mx-4'/></a>
            <a href="https://gabrielghiaroni.com/" target="_blank" rel="noreferrer noopener"><AiOutlineGlobal className='mx-4'/></a>
        </div>

        {/*Ícone Menu Hamburguer*/}
        <div className='sm:hidden z-10'>
            {nav ? <AiOutlineClose size={20} className='mr-4 cursor-pointer'onClick={() => {setNav(!nav)}}/>
            : <FaBars size={20} className='mr-4 cursor-pointer'onClick={() => {setNav(!nav)}}/>}
        </div>

        {/*Menu Mobile*/}
        <div className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 w-full absolute text-white left-0 top-0 h-screen bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] flex flex-col justify-center items-center text-center px-4 py-7'
                        : 'absolute top-0 h-screen left-[-100%]'}>
            <ul>
                <li className='text-2xl py-8'>
                    <a href="#home" onClick={() => {setNav(!nav)}}>Home</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href="#pacotes" onClick={() => {setNav(!nav)}}>Pacotes</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href="#booking" onClick={() => {setNav(!nav)}}>Reservar</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href="#contato" onClick={() => {setNav(!nav)}}>Contato</a>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Navbar;