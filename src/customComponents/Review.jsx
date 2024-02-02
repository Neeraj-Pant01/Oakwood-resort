import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';

const Review = () => {
  return (
    <div className='flex items-center flex-col md:w-96 bg-[white] md:py-10 gap-6 md:px-6'>
      <div className='flex items-center'>
        {
            Array.from({length:5}).map((_,i)=>{
                return(
                    <StarIcon key={i} className='text-[#fcca4b]' />
                    
            )
            })
        }
      </div>
      <Typography fontWeight={"bold"} variant='h5' color={"black"}>We Loved It</Typography>
      <Typography variant='h7' sx={{textAlign:"center", color:"grey"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel tempora voluptatibus nisi corrupti alias? In pariatur unde aperiam reprehenderit optio voluptate, voluptatem quisquam, eligendi.</Typography>
      <img className='md:w-36 md:h-36 rounded-full' src='https://media.istockphoto.com/id/1218540918/photo/man-having-coffee-while-looking-out-through-window.jpg?s=612x612&w=0&k=20&c=Y1hbrb334qe8zgi5gkj1FhTJwzL5XtPEv5K1cSCu73c=' />
      <Typography variant='h7'>username</Typography>
    </div>
  )
}

export default Review
