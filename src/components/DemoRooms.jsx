import styled from '@emotion/styled'
import React from 'react'

const Container = styled('div')({
    // border:"2px solid red",
    display:"flex",
    alignItems:"center",
    marginTop:"100px",
})

const ImageContainer = styled.div`
flex:1;
// border:1px solid yellow;
align-items:center;
justify-content:center;
`

const Image = styled.img`
width:99%;
height:350px;
`



const DemoRooms = () => {
    const hotelRoomsImages = ["/f1.jpg", "f2.jpg", "f3.jpg"]
  return (
    <Container>
      {
        hotelRoomsImages.map((img,i)=>{
            return (
                <ImageContainer>
                    <Image src={img} alt='' />
                </ImageContainer>
            )
        })
      }
    </Container>
  )
}

export default DemoRooms
