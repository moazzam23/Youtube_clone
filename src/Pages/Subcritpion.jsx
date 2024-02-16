import React from 'react'
import Pagelayouts from '../components/PageLayout/Pagelayouts'
import { Avatar, Button, Typography } from '@mui/material'
import data2 from "../Data/Shorts.json"
import { More } from '@mui/icons-material'
import data from "../Data/Card.json"

const Subcritpion = () => {
  return (
    <Pagelayouts>
   <h2 style={{marginTop:"10px" ,backgroundColor:"black" ,color:"white"}}> Latest Vedios</h2>
    <div className='home'>
   {data.slice(0, 3).map((data,index)=>(
   <div key={index} className='card'>
    <div className='cardimage'>
    <video className='cardvedio' width="100%"  controls>
          <source src={data.videoUrl} type="video/mp4" />
        </video>
    </div>
    <div className='cardtitle'>
      <Avatar src={data.userImageUrl} sizes='sm'/>
      <Typography className='cardtag'>{data.title}</Typography>
      <More/>
    </div >
    <Typography className='cardchan' >{data.channelName}</Typography>
    <div className='cardend'>
      <label> {data.views} views</label>
      <label> {data.postedAt} ago</label>
    </div>
   </div>
   ))}
   </div>
    <h3 style={{marginTop:"30px" ,backgroundColor:"black" ,color:"white"}} >Shorts</h3>
   <div className='subcripbe'>
   {data2.map((data,index)=>(
<div className='short' key={index}>
    <div className='shortleft' > 
    <video src={data2.videoUrl}  className='shortvedio' width="60%"  controls/>
          {/* <source src={data.videoUrl} type="video/mp4" /> */}
        {/* </video> */}
        <div className='shortleftti'>
            <Avatar src={data.userImageUrl}  alt='pic'/>
            <Typography variant='span' style={{color:"white"}} >{data.title} </Typography>
            <Button style={{backgroundColor:"white" , color:"black" , borderRadius:"20px"}}> Subscribe </Button>
        </div>
    </div>
   
</div>
))}
   </div>

    </Pagelayouts>
  )
}

export default Subcritpion