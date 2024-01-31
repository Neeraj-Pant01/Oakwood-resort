import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import React from 'react'

const Container = styled.div`
// border:2px solid red;
position:sticky;
top:60px;
display:flex;
align-items:center;
padding:20px 150px;
justify-content:space-between;
`
const Wrapper = styled.div`
// border:2px solid red;
// flex:${(props)=>props.flex || "1"};
width: max-content;
display:flex;
align-items:center;
gap:40px;
// gap:${(props)=>props.gap || "1"};
`

const Links = ["Home", "Discover", "About us", "Online Booking"]

const CustomNav = () => {
  return (
    <Container>
        <Wrapper>
        <Typography variant='h5' fontWeight={"bold"} color={"black"}>OAKWOOD RESORT</Typography>
        </Wrapper>
        <Wrapper flex="2" gap="10">
            {
                Links.map((l,i)=>{
                    return (
                        <Typography color={i===0 ? "lightblue":"black"}>{l}</Typography>
                    )
                })
            }
        </Wrapper>
        <Wrapper flex="0.2">
        <Button variant='contained' sx={{backgroundColor:"lightblue",":hover":{backgroundColor:"lightblue",opacity:"0.8"}}}>Book</Button>
        </Wrapper>
    </Container>
  )
}

export default CustomNav
