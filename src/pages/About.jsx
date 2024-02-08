import CustomNav from '../customComponents/CustomNav'
import Footer from '../components/Footer'
import Videos from '../customComponents/Videos'

const About = () => {
  return (
    < div className='overflow-hidden'>
    {/* <CustomNav /> */}
    <div className='flex flex-col mt-10'>
      <Videos flex="flex-row"/>
      <Videos flex="flex-row"/>
      <Videos flex="flex-row"/>
    </div>
    <Footer />
    </div>
  )
}

export default About
