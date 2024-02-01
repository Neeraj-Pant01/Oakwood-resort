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
    const hotelRoomsImages = ["https://media-cdn.tripadvisor.com/media/photo-m/1280/14/53/ea/9e/g-hotel.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxX7TOWCbM1rmC4-ofxsA-d01Ni8ZG_aO83ke1Vl3-9ur-xHH4FMqHOH52MdJioB1OSus&usqp=CAU", "https://static.toiimg.com/photo/51107660.cms", "https://assets-global.website-files.com/62294553e9aeea20d15d7bc2/62bcc5ad3bf84a60e550b9cf_4.jpg"]
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
