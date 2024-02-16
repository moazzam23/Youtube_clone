import React from 'react'
import Pagelayouts from "../components/PageLayout/Pagelayouts"
import { Avatar, Button, Typography } from '@mui/material'
import { GoComment, GoThumbsdown, GoThumbsup } from 'react-icons/go'
import { IoMdMore } from "react-icons/io";
import { FaShare } from 'react-icons/fa';
import data from "../Data/Shorts.json"

const Shorts = () => {
    console.log(data)
  return (
    <Pagelayouts>
         {data.map((data,index)=>(
<div className='short' key={index}>
    <div className='shortleft' > 
    <video src={data.videoUrl}  className='shortvedio' width="60%"  controls/>
          {/* <source src={data.videoUrl} type="video/mp4" /> */}
        {/* </video> */}
        <div className='shortleftti'>
            <Avatar src={data.userImageUrl}  alt='pic'/>
            <Typography variant='span' style={{color:"white"}} >{data?.title} </Typography>
            <Button style={{backgroundColor:"white" , color:"black" , borderRadius:"20px"}}> Subscribe </Button>
        </div>
        <div style={{color:"white",zIndex:"999"}}>
            <Typography variant='span' style={{}}>{data.channelName}</Typography>
        </div>
    </div>
    <div className='shortright'>
        <div className='shortriicon'>
            <GoThumbsup className='righticon'/>
            <Typography variant='label'> {data.like}</Typography>
        </div>
        <div className='shortriicon'>
            <GoThumbsdown className='righticon'/>
            <Typography variant='label'> {data.dislike}</Typography>
        </div>
        <div className='shortriicon'>
            <GoComment className='righticon'/>
            <Typography variant='label' >787</Typography>
        </div >
        <div className='shortriicon'>
            <FaShare className='righticon'/>
            <Typography variant='label' >Share</Typography>
        </div>
        <div className='shortriicon'>
            <IoMdMore className='righticon'/>
        </div>
    </div>
</div>
))}
    </Pagelayouts>
     )
}

export default Shorts