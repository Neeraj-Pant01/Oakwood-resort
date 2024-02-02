import React from 'react'

const ResortInfo = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between mt-28 md:px-28 gap-10'>
      <div className='flex flex-col flex-1 items-center justify-center gap-6'>
        <img src='/hotelIcon.svg' className='w-24 h-24'/>
        <h1 className='text-xl md:text-3xl'>Fabolous Resort</h1>
        <div className='md:px-16 px-4 text-[grey] text-center md:text-lg'>Discover a haven of tranquility nestled amidst lush greenery, where our resort, surrounded by a dense forest, offers a unique blend of serenity and adventure.Immerse yourself in nature, experience our exclusive fish collections, enjoy camping under the stars, and gather around the mesmerizing bonfire for unforgettable moments at our fabulous resort.</div>
      </div>
      <div className='flex-col flex flex-1 items-center justify-center gap-6'>
            <img src='/roomsIcon.svg' className='w-24 h-24' />
        <h1 className='text-xl md:text-3xl'>Awesome Food</h1>
            <div className='md:px-16 px-4 text-[grey] text-center md:text-lg'>Embark on a culinary journey at our resort's fabulous food section, where every dish is a masterpiece crafted with passion. Indulge in a symphony of flavors that showcase the richness of local ingredients, delivering a dining experience that is both delightful and unforgettable. Savor the exquisite taste of nature's bounty, uniquely presented for your gastronomic pleasure.</div>
        </div>
      <div className='flex-col flex flex-1 items-center justify-center gap-6'>
            <img src='/roomsIcon.svg' className='w-24 h-24' />
            <h1 className='text-xl md:text-3xl'>Trekking</h1>
            <div className='md:px-16 px-4 text-[grey] text-center md:text-lg'>Unveils the beauty of orchid-laden trails and the melodious symphony of birds. Immerse yourself in the tranquility of our surroundings, as our small trekking haven becomes the perfect retreat for bird watching enthusiasts.Explore the wonders of nature and witness the vibrant harmony between orchid trees and the feathered inhabitants of our serene landscape.</div>
        </div>
    </div>
  )
}

export default ResortInfo
