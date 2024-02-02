import { Button, Typography } from '@mui/material'
import React from 'react'
import { RoomBookingData } from '../../data'

const BookRoom = () => {
  return (
    <div className='flex items-center flex-col md:gap-10 gap-5 mt-20 md:px-40'>
        <Typography variant='h4' color={"#343434"} fontWeight={"bold"}>BOOK A ROOM</Typography>
        <Typography variant='h8' color={"grey"} textAlign={"center"} className='md:px-20 px-8 text-sm'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe neque, dolorum obcaecati consectetur voluptates vero eius repellat, necessitatibus distinctio iure pariatur id est culpa dolor! Illo dolor consequuntur deserunt quis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe neque, dolorum obcaecati consectetur voluptates vero eius repellat, necessitatibus distinctio iure pariatur id est culpa dolor! Illo dolor consequuntur deserunt quis.
        </Typography>
        <div className='flex gap-6 md:gap-0 flex-col md:flex-row items-center md:justify-center'>
            {
                RoomBookingData.map((r,i)=>{
                    return (
                        <div className='flex relative flex-col w-80 h-80 md:w-96 md:h-96 items-center justify-between'>
                            <img className='md:w-80 w-80 h-80 absolute md:h-96' src={r.image} alt='' />
                            <Button className='border w-fit' sx={{cursor:"pointer",backgroundColor:"white", marginTop:"20px",marginLeft:"20px", color:"black", ":hover":{
                                backgroundColor:"white",
                                zIndex:"9999",
                            }}} variant='contained'>₹{r.price}/Night</Button>
                            <Button className='md:w-72 w-64' variant='contained' sx={{cursor:"pointer",backgroundColor:"#F88379", color:"white", ":hover":{
                                backgroundColor:"#F88379",
                                zIndex:"9999",
                                color:"white",
                            },marginBottom:"20px",padding:"10px 0px"}}>{r.type}</Button>
                            </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default BookRoom
