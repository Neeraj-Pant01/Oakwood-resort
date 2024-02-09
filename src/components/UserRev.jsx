import { Star } from '@mui/icons-material'
import React from 'react'
import img1 from "../assets/images/own.jpg"

const UserRev = () => {
    return (
        <div className='flex flex-col w-full md:w-[45%] gap-6 mt-10'>
            <div className="flex gap-1">
                {
                    Array(5).fill().map((_, i) => 
                    <Star className='text-[#835656]'/>
                    )
                }
            </div>
            <p className='text-sm font-extralight md:text-[16px] text-[black] leading-7'>
            Oakwood Resort is the perfect getaway for nature lovers. The trekking trails were breathtaking, and the bird watching was incredible. The resort's luxurious amenities and incredible hospitality made our stay unforgettable.
            </p>
            <div className='flex items-center gap-3'>
                <img className='w-[45px] h-[45px] rounded-full' src={img1} alt='' />
                <h1 className='text-[#cd901f] md:text-[18px] text-[16px]'>USER USERNAME</h1>
            </div>
        </div>
    )
}

export default UserRev
