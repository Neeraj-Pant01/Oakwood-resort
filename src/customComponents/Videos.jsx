import React from 'react'

const Videos = ({flex}) => {
  return (
    <div className={`flex flex-col md:${flex}`}>
    <div className='flex-1 px-4 md:px-10 py-10'>
      <video src="" controls className='rounded-lg outline-none w-fit'/>
    </div>
    <div className='flex-1 px-4 md:px-10 flex items-center justify-center md:items-center md:justify-start'>
      <p className='md:mr-20 text-[black] text-md md:text-lg'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero mollitia, aliquid at ad dolore temporibus sunt est officiis soluta quia? Maiores, necessitatibus aliquid sapiente, laboriosam, quidem eum omnis quos asperiores ex nulla eveniet facere ipsa quas ipsum. Deleniti quaerat repellat veniam laudantium, dicta, odit, impedit porro exercitationem hic nemo eos!
      </p>
    </div>
  </div>
  )
}

export default Videos
