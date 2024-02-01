import React from 'react'

const Excellence = () => {
  return (
    <div className='flex mt-32 flex-col md:flex-row gap-10 md:gap-0'>
      <div className='flex flex-col flex-1 gap-6 md:pl-44 px-10 md:px-0 md:pr-8 items-end justify-end'>
        <h1 className='text-xl md:text-3xl'>The Beginning Stream / Embarking on a Journey of Promise</h1>
        <p className='text-[grey] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, harum, et maiores doloribus sapiente qui temporibus quasi quos aperiam quia, impedit odio minus. Obcaecati error itaque officia, natus placeat voluptatibus ab, sed aliquid, tempore id aliquam labore ea repellat vitae in non quidem quisquam ipsa nemo consequuntur temporibus qui. Vero repellendus natus odit suscipit inventore, nam eligendi molestiae quam aut deserunt incidunt odio quaerat ratione libero velit perferendis numquam esse.</p>
      </div>
      <div className='flex flex-1 items-center justify-center md:justify-normal gap-8 md:gap-6 md:mr-20'>
        <img src='/about_1.png' className='w-16 h-16 md:h-36 md:w-36' />
        <img src='/about_2.png' className='w-18 h-16 md:h-40 md:w-48' />
        <img src='/about_3.png' className='w-16 h-16 md:h-36 md:w-36' />
      </div>
    </div>
  )
}

export default Excellence
