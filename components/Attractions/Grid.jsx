import React from 'react'
import Card from './Card'
import attractions from '@public/attractions.json';
import Image from 'next/image'
const Grid = () => {

  return (
    <div className='bg-cyan-500 items-center justify-center items-center'>
        <br /><br />
        <h2 className="text-center text-4xl font-bold text-white p-5">Tickets</h2>
        <h3 className="text-center text-2xl font-bold text-white p-5">Achetez vos tickets</h3>
        <center><Image className="justify-center items-center text-center" src='/tickets.png' width={400} height={400} alt="Attractions" /></center>
        <br /><br /> 
        <h2 className="text-center text-4xl font-bold text-white p-5" id="Attractions">Attractions</h2>
        <h3 className="text-center text-2xl font-bold text-white p-5">Découvrez nos attractions</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {attractions.map((attraction, index) => (
              <Card key={index} titre={attraction.nom} prix={attraction.ticket} age={attraction.age} temps={attraction.temps} image={attraction.url_image}/>
            ))}
        </div>
        <br /><br />
    </div>
  )
}

export default Grid