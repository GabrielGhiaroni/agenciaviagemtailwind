import React from 'react'

const Contato = () => {
  return (
    <section id='contato' className='max-w-[1140px] m-auto p-4 py-16'>
        <h2 className='text-center text-gray-700'>Envie-nos uma mensagem</h2>
        <p className='text-center texte-gray-700 py-2'>Estamos prontos para te ajudar!</p>
        <div className='grid md:grid-cols-2'>
            <img className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] rounded-lg' src="https://images.pexels.com/photos/5232436/pexels-photo-5232436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <form>
                <div className='grid grid-cols-2'>
                    <input className='border m-2 p-2 rounded-lg' type="text" placeholder='Seu nome'/>
                    <input className='border m-2 p-2 rounded-lg' type="text" placeholder='Seu sobrenome'/>
                    <input className='border m-2 p-2 rounded-lg' type="tel" placeholder='Seu telefone'/>
                    <input className='border m-2 p-2 rounded-lg' type="text" placeholder='Seu email'/>
                    <textarea className='rounded-lg resize-none border col-span-2 m-2 p-2' cols="30" rows="10" placeholder='Sua mensagem'></textarea>
                    <button className='col-span-2 m-2'>Enviar mensagem</button>
                </div>
            </form>
        </div> 
    </section>
  )
}

export default Contato;