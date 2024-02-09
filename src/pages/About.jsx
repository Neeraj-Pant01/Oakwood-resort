import CustomNav from '../customComponents/CustomNav'
import Footer from '../components/Footer'
import Videos from '../customComponents/Videos'
import ab from "../assets/images/ab.jpg"
import { owners } from "../essential"
import UserRev from '../components/UserRev'


const About = () => {
  return (
    < div className='overflow-hidden'>
      <div className="flex md:px-10 py-10 gap-5 flex-col md:flex-row">
        <div className="flex-1 flex justify-center md:pl-32 flex-col gap-6 text-2xl md:text-5xl">
          <h1 className='text-[black] text-center md:text-left'>Mission statement</h1>
          <p className='md:text-lg text-sm md:text-left text-center px-6 md:px-0 text-[grey]'>
            At Oakwood Resort, we are committed to providing you with a memorable and revitalizing holiday experience. Our resort’s idyllic location, world-class amenities, and exceptional hospitality make us the ultimate choice for nature lovers and adventure seekers. We strive to exceed your expectations and create unforgettable moments that will stay with you forever.
          </p>
        </div>
        <div className="flex-1 md:pr-24 flex items-start">
          <img className='md:h-[400px] h-[300px]' src={ab} alt="" />
        </div>
      </div>
      <div className='flex flex-col mt-20 md:px-10 md:py-16 py-10'>
        <div className="flex-1 flex px-6 justify-center md:pl-32 flex-col gap-6">
          <h1 className='text-2xl md:text-5xl'>OUR TEAM</h1>
          <p className='text-[grey] text-sm md:text-lg'>Meet the Hospitality Experts: Discover the Dedicated Oakwood Resort Team Behind Your Unforgettable Stay</p>
        </div>
        <div className="flex justify-center md:pl-32 flex-col md:flex-row gap-6 mt-20">
          {
            owners.map((item, i) => {
              return (
                <div className='flex px-6 md:px-0 flex-col md:flex-row w-full gap-4'>
                  <div className='flex-1'>
                    <img className='md:h-[200px] h-[180px] w-[240px] rounded-md md:w-[300px]' src={item.img} />
                  </div>
                  <div className="flex-1 flex-col">
                    <h1 className='text-lg md:text-3xl'>{item.name}</h1>
                    <span className='text-[grey] mt-2'>{item.title}</span>
                    <p className='md:text-lg text-sm mt-6 text-[grey]'>{item.desc}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='flex flex-col mt-10 md:px-10 md:py-16 py-10 md:pl-32 pl-6'>
        <div className='flex flex-col'>
          <h1 className='text-xl md:text-3xl'>Client Testimonials</h1>
          <p className='text-[grey] text-sm md:text-lg mt-2'>Hear What Our Clients Have to Say About Us</p>
        </div>
        <div className='flex md:mt-10 flex-wrap gap-10'>
          <UserRev />
          <UserRev />
          <UserRev />
          <UserRev />
          <UserRev />
        </div>
        </div>
      <Footer />
    </div>
  )
}

export default About
