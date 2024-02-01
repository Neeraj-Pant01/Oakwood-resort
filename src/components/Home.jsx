import React from 'react'
import CustomNav from '../customComponents/CustomNav'
import Carousal from '../customComponents/Carousal'
import styled from '@emotion/styled'


const StyledBox = styled('div')({
    position: 'relative',
    height: '100vh',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: 'rgba(0, 0, 0, 0.5)', 
      zIndex: 1,
    },
    '& > div': {
      position: 'relative',
      zIndex: 2,
    },
    background: `url(/slide2.jpg)`,
    backgroundSize: 'cover',
  });
const Home = () => {
  return (
    <StyledBox>
    <CustomNav />
        <Carousal />
    </StyledBox>
  )
}

export default Home