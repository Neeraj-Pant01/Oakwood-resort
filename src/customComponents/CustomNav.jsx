import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';

const Container = styled.div`
// border:2px solid red;
position:sticky;
top:0;
// height:100px;
display:flex;
align-items:center;
padding:30px 75px;
justify-content:space-between;
background:rgba(0,0,0,0.5)
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

const StyledButton =styled('div')({
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    background:'#ffa37b',
    width:152,
    height:54,
    color:"white"
})

const Links = ["Home", "Discover","Blog", "About us","Contact Us"]

const CustomNav = () => {
  return (
    <Container>
        <Wrapper>
        <Typography variant='h5' fontWeight={"bold"} color={"white"}>OAKWOOD RESORT</Typography>
        </Wrapper>
        <Wrapper flex="2" gap="10">
            {
                Links.map((l,i)=>{
                    return (
                        <Typography key={i} color={i===0 ? "#ffa37b":"white"}>{l}</Typography>
                    )
                })
            }
        <Wrapper flex="0.2">
        <StyledButton variant='contained'>Book Online</StyledButton>
        <StyledButton variant='contained'><PhoneIcon />9520593613</StyledButton>
        </Wrapper>
        </Wrapper>
    </Container>
  )
}

export default CustomNav
