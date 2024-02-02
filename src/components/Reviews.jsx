import React from 'react'
import Review from '../customComponents/Review'

const Reviews = () => {
  return (
    <div className='flex mt-24 bg-[url("/slide2.jpg")] md:px-5 bg-no-repeat bg-cover md:py-20 justify-center flex-wrap md:gap-10'>
        <Review />
        <Review />
        <Review />
    </div>
  )
}

export default Reviews
