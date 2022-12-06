import React from 'react';
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { GiStripedSun } from 'react-icons/gi';

const TopBar = () => {
  return (
    <div className='flex justify-between px-4 py-2'>
        <div className='flex items-center'>
            <GiStripedSun size={30} className='mr-2 text-[var(--primary-dark)]'/>
            <h1 className='text-xl font-bold text-gray-700'>TODEFERIAS</h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>10h - 19h</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>219999-9999</p>
            </div>
            <button><a href="https://api.whatsapp.com/send?phone=5521983617775" target="_blank" rel="noreferrer noopener">Fale Conosco</a></button>
        </div>
    </div>
  )
}

export default TopBar;