import React from 'react';

const Galeria = () => {
  return (
    <section id='galeria' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Galeria</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/4603460/pexels-photo-4603460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/261414/pexels-photo-261414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/5007356/pexels-photo-5007356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Galeria;