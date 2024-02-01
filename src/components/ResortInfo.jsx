import React from 'react'

const ResortInfo = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between mt-28 md:px-28 gap-10'>
      <div className='flex flex-col flex-1 items-center justify-center gap-6'>
        <img src='/hotelIcon.svg' className='w-24 h-24'/>
        <h1 className='text-xl md:text-3xl'>Fabolous Resort</h1>
        <div className='md:px-16 px-4 text-[grey] text-center md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quaerat temporibus necessitatibus quod eaque aspernatur incidunt? Deserunt adipisci autem, id deleniti vel obcaecati accusamus molestias. Placeat, odit. Odit, doloremque aperiam.</div>
      </div>
      <div className='flex-col flex flex-1 items-center justify-center gap-6'>
            <img src='/roomsIcon.svg' className='w-24 h-24' />
        <h1 className='text-xl md:text-3xl'>Awesome Food</h1>
            <div className='md:px-16 px-4 text-[grey] text-center md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quaerat temporibus necessitatibus quod eaque aspernatur incidunt? Deserunt adipisci autem, id deleniti vel obcaecati accusamus molestias. Placeat, odit. Odit, doloremque aperiam.</div>
        </div>
      <div className='flex-col flex flex-1 items-center justify-center gap-6'>
            <img src='/roomsIcon.svg' className='w-24 h-24' />
            <h1 className='text-xl md:text-3xl'>Luxury Rooms</h1>
            <div className='md:px-16 px-4 text-[grey] text-center md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quaerat temporibus necessitatibus quod eaque aspernatur incidunt? Deserunt adipisci autem, id deleniti vel obcaecati accusamus molestias. Placeat, odit. Odit, doloremque aperiam.</div>
        </div>
    </div>
  )
}

export default ResortInfo
