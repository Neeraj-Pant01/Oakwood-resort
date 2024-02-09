import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
const Container = styled.div`
// border:2px solid red;
position:sticky;
top:0;
// height:100px;
display:flex;
align-items:center;
padding:10px 20px;
justify-content:space-around;
background:white;

`
const Wrapper = styled.div`
// border:2px solid red;
// flex:${(props)=>props.flex || "1"};
width: max-content;
display:flex;
align-items:center;
gap:40px;
// gap:${(props)=>props.gap || "1"};
@media screen and (max-width: 900px) {
    display:none
   }
`

const StyledButton =styled('div')({
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    background:'#EE6043',
    borderRadius:10,
    // fontWeight:600,
    width:152,
    // height:,
    padding:10,
    color:"white"
})

const Links = ["Home", "Services", "About us","Contact Us"]

const CustomNav = () => {

    const navigate = useNavigate()

    const changeNav = (l) =>{
        if(l==='About us'){
            navigate('/about')
        }
        else if(l==='Services'){
            navigate('/discover');
        }
        else if(l==="Home"){
            navigate("/")
        }
    }
  return (
    <Container className='z-50'>
        <Box>
        <Typography variant='h5'  color={"black"}>OAKWOOD RESORT</Typography>
        </Box>
        <Wrapper flex="2" gap="10">
            {
                Links.map((l,i)=>{
                    return (
                        <Typography  className='cursor-pointer' key={i} color={i===0 ? "#ffa37b":"black"} onClick={()=>changeNav(l)}>{l}</Typography>
                    )
                })
            }
        <Wrapper flex="0.2">
        <StyledButton variant='contained'>Book Online</StyledButton>
        {/* <StyledButton variant='contained'><PhoneIcon />9520593613</StyledButton> */}
        </Wrapper>
        </Wrapper>
        <Box><MenuIcon /></Box>
    </Container>
  )
}

export default CustomNav
