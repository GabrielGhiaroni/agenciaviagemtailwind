import React from 'react';

const Booking = () => {
  return (
    <section id='booking' className='max-w-[1140px] m-auto w-full p-4'>
        <form className='lg:flex lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
                <label>Destino</label>
                <select className='lg:w-[300px] border md:w-full rounded-md p-2'>
                    <option>Maldivas</option>
                    <option>Cancún</option>
                    <option>Caribe</option>
                    <option>Tailândia</option>
                </select>
            </div>

            <div className='flex'>
                <div className='flex flex-col w-full lg:max-[250px] my-2 p-1'>
                    <label>Check-in</label>
                    <input className='border rounded-md p-1 cursor-pointer' type="date"/>
                </div>
                <div className='flex flex-col w-full lg:max-[250px] my-2 p-1'>
                    <label>Checkout</label>
                    <input className='border rounded-md p-1 cursor-pointer' type="date"/>
                </div>
            </div>
            <div>
                <button className='w-full'>Buscar destinos</button>
            </div>
        </form>
    </section>
  )
}

export default Booking;