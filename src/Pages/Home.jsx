import React from 'react'
import Pagelayouts from '../components/PageLayout/Pagelayouts'
import { Avatar, Typography } from '@mui/material'
import { More } from '@mui/icons-material'
import data from "../Data/Card.json"

const Home = () => {
  
  return (
   <Pagelayouts>
    <div className='home'>
   {data.map((data,index)=>(
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
   </Pagelayouts>
  )
}

export default Home