import React from 'react'
import Carousal from '../customComponents/Carousal'
import styled from '@emotion/styled'
import ResortInfo from './ResortInfo';
import DemoRooms from './DemoRooms';
import Excellence from './Excellence';
import Reviews from './Reviews';
import BookRoom from './BookRoom';
import Planner from './Planner';
import Footer from './Footer';

const images = ["/slide2.jpg", "/slide3.webp", "/slide1.jpeg"]



// const StyledBox = styled('div')({
//     position: 'relative',
//     height: '100vh',
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       right: 0,
//       bottom: 0,
//       left: 0,
//       // background: 'rgba(0, 0, 0, 0.5)', 
//       background:"transparent",
//       zIndex: 1,
//     },
//     '& > div': {
//       position: 'relative',
//       zIndex: 2,
//     },
//     // background: `url(/slide3.webp)`,
//     background:"transparent",
//     backgroundSize: 'cover',
//   });

const StyledBox = styled('div')({
  height: '100vh',
  // border:"2px solid yellow"
});

const Container = styled.div`
// border:2px solid red;
height:100%;
top:0px;
z-index:200;
`


const Home = () => {

  return (
    <>
    <StyledBox>
    <Container>
    <Carousal />
    </Container>
    </StyledBox>
    <ResortInfo />
    <DemoRooms />
    <Excellence />
    <Reviews />
    <BookRoom />
    <Planner />
    <Footer />
    </>
  )
}

export default Home
