import { Facebook, Instagram } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col mt-32 items-center'>
      <h1 className='text-[#252424] font-bold text-xl md:text-3xl border-2 border-[black] px-4 py-2'>OAKWOOD RESORT</h1>
      <span className='mt-4'>A Natural Heaven</span>
      <div className='flex md:flex-row flex-col mt-10 md:mt-20 items-center justify-center gap-5  md:gap-32'>
        <div className='flex flex-col md:gap-4 w-full md:items-start items-center'>
            <h1 className='font-bold'>OUR ADDRESS</h1>
            <span className='text-[grey]'>gopeshwar</span>
            <span className='text-[grey]'>chamoli, uttrakhand</span>
            <span className='text-[grey]'>India</span>
        </div>
        <div className='flex flex-col md:gap-4 w-full md:items-start items-center'>
            <h1 className='font-bold'>RESERVATIONS</h1>
            <span className='text-[grey]'>Tel : 1918171615</span>
            <span className='text-[grey]'>whatsApp : 9876543213</span>
            <span className='text-[grey]'>email : reservations@gmail.com</span>
        </div>
        <div className='flex flex-col md:gap-2 w-full md:items-start items-center'>
        <h1 className='font-bold'>SOCIAL LINKS</h1>
        <span className='text-[grey]'>
            Instaragram : <Instagram className='text-[black]' />
        </span>
        <span className='text-[grey]'>
            Facebook : <Facebook className='text-[black]'/>
        </span>
        </div>
        <div className='flex flex-row gap-4 w-full justify-center md:justify-normal'>
            <img className='md:w-24 md:h-24 w-14 h-14' src='/about_1.png' alt='' />
            <img className='md:w-32 md:h-24 w-18 h-14' src='/about_2.png' alt='' />
        </div>
      </div>
      <p className='text-[grey] md:mt-24 mt-10 text-center text-sm md:text-lg mb-5'>Copyright ©2024 All rights reserved | All Rights Belongs to the OAKWOOD RESORT</p>
    </div>
  )
}

export default Footer
