import React, { useEffect, useState } from 'react'
import { PlannerData } from '../../data'
import styled from '@emotion/styled'


// const Container = styled.div`
// width: 100vw;
// overflow-x: hidden;
// display:flex;
// margin-top:32px;
// align-items:center;
// justify-content:space-around;
// margin: 60px;
// transform: translateX(${(props)=>props.current * -10}vw);
// transition: all 1.5s ease;
// gap:20px;
// `

const Planner = () => {
  // const [i, setI] = useState(0)

  // const setIndex = () => {
  //   setI((prevIndex) => (prevIndex + 1) % PlannerData.length);
  // };

  // useEffect(()=>{
  //   const timeOutId = setTimeout(()=>{
  //     setIndex()
  //   },1000)

  //   return () => clearTimeout(timeOutId)
  // },[i])

  return (
    <div className='flex mt-32 md:mx-40 border items-center justify-around overflow-x-hidden'>
      <img className='w-96 h-96' src={PlannerData[0]} alt='' />
      <img className='w-96 h-96' src={PlannerData[1]} alt='' />
      <img className='w-96 h-96' src={PlannerData[2]} />
      </div>
    // <Container current={i}>
    //   {
    //     PlannerData.map((d,i)=>{
    //       return(
    //               <img className='w-96 h-96' src={d} />
    //       )
    //     })
    //   }
    // </Container>
  )
}

export default Planner
