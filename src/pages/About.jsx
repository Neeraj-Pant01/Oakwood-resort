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
        <div className='flex flex-1'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13764.072483127351!2d79.30894009904627!3d30.407227752171146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909d458db25f9b9%3A0x3c8e88f7178344d7!2sGopeshwar%2C%20Uttarakhand%20246401!5e0!3m2!1sen!2sin!4v1707135428328!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default About
