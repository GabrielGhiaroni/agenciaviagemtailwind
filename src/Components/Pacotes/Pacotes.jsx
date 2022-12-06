import React from 'react';

const Pacotes = () => {
  return (
    <section id='pacotes' className='max-w-[1140px] m-auto md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <a href="#hero">
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-medium'>Resorts</h3>
                <img className='w-full h-full object-cover relative rounded-lg brightness-50' src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </a>
        </div>
        <div className='relative p-4'>
            <a href="#hero">
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-medium'>Atividades</h3>
                <img className='w-full h-full object-cover relative rounded-lg brightness-50' src="https://images.pexels.com/photos/3041866/pexels-photo-3041866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </a>
        </div>
        <div className='relative p-4'>
            <a href="#hero">
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-medium'>Cruzeiros</h3>
                <img className='w-full h-full object-cover relative rounded-lg brightness-50' src="https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </a>
        </div>
    </section>
  )
}

export default Pacotes;