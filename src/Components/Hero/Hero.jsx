import React from 'react';

const Hero = () => {
  return (
    <section id='hero' className='w-full h-[90vh]'>
        <img src="https://images.pexels.com/photos/4024137/pexels-photo-4024137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
            className='w-full h-full object-cover brightness-50'
        />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
            <h1 className='font-bold text-4xl'>Planeje a viagem dos seus sonhos</h1>
            <h2 className='italic py-4'>Com a TODEFERIAS</h2>
            <p>
                Acreditamos que viajar é para todos. Conheça nossos pacotes e viaje para onde sempre sonhou.
            </p>
            </div>
        </div>
    </section>
  )
}

export default Hero;