import React from 'react'
import CustomNav from '../customComponents/CustomNav'
import Footer from '../components/Footer'

const About = () => {
  return (
    < div className='overflow-hidden'>
    <CustomNav />
    <div className='flex gap-10 md:gap-0 flex-col md:flex-row mt-10'>
        <div className='flex flex-1 flex-col md:ml-40'>
            <h1 className='text-[#2d2c2c] text-center md:text-left text-xl md:text-4xl font-bold'>Get In Touch</h1>
            <div className='flex flex-col items-center md:items-start text-[grey] mt-10 gap-3'>
                <span>Address Line 1</span>
                <span>Chamoli, Gopeshwar</span>
                <span>Address Line 1</span>

            </div>
            <form className='flex items-center md:items-start flex-col mt-10 w-full gap-5'>
                <input type='text' name='name' className='md:w-96 w-72 md:py-4 outline-none border-b-2 border-[black]' placeholder='your name'></input>
                <input type='email' name='email' className='w-72 md:w-96 md:py-4 outline-none border-b-2 border-[black]' placeholder='your email'></input>
                <textarea name='message' className='w-72 md:w-96 h-28 md:h-40 md:py-4 outline-none border-b-2 border-[black] resize-none' placeholder='enter your message here' />

                <button className='md:px-12 md:py-3 text-[white] bg-[#ffa37b] w-fit px-10 py-2'>send</button>
            </form>
        </div>
        <div className='flex flex-1 border'>google map</div>
    </div>
    <Footer />
    </div>
  )
}

export default About
