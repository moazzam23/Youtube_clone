import { ArrowCircleRightOutlined, Search } from '@mui/icons-material'
import { Avatar, Button, Typography } from '@mui/material'
import React from 'react'
import Pagelayouts from '../components/PageLayout/Pagelayouts'
import { SiYoutubeshorts} from "react-icons/si"
import data2 from "../Data/Shorts.json"
import { IoMdMore } from 'react-icons/io'
  
const Channel = () => {
  return (
<Pagelayouts>
<div style={{paddingTop:"30px"}} >
        <div className='channelname'>
            <Avatar src='' alt='pic'   sx={{ width: 176, height: 176 }}  />
<div className='chanelown'>
    <h1>Mirza Muhammad Moazzam Baig</h1>
    <h4 style={{color:"grey", paddingTop:"10px"}} > @moazzambaig9033 . 3 Vedios </h4>
    <label style={{display:"flex" , flexDirection:"row",gap:"10px",paddingTop:"10px",alignContent:"center" }}> Status <ArrowCircleRightOutlined/> </label>
    <div  style={{display:"flex" , flexDirection:"row",gap:"10px",paddingTop:"10px",alignContent:"center" }}>
        <Button style={{backgroundColor:"#d4d6d5" , color:"black"}} >Customize Channel </Button>
        <Button style={{backgroundColor:"#d4d6d5" , color:"black"}}> Manage Vedios </Button>
    </div>
</div>
</div>
<div style={{display:"flex" , flexDirection:"row",gap:"30px",paddingTop:"30px",paddingLeft:"20px",fontSize:"20px",fontWeight:"900",alignContent:"center" }}>
    <label>Home</label>
    <label>Vedios</label>
    <label>PlayList</label>
    <label>Shorts</label>
    <label><Search/></label>
    
</div>
<hr/>
<section style={{paddingTop:"20px"}}>
    <h2><SiYoutubeshorts color='red'/> Shorts</h2>
    <div style={{marginTop:"-30px"}} className='subcripbe'>
    {data2.map((data,index)=>(
<div className='short' key={index}>
    <div className='shortleft' > 
    <video src={data2.videoUrl}  className='shortvedio' width="60%"  controls/>
        <div className='shortleftti'>
            <Avatar src={data.userImageUrl}  alt='pic'/>
            <Typography variant='span' style={{color:"white"}} >{data.title} </Typography>
            <Button style={{backgroundColor:"white" , color:"black" , borderRadius:"20px"}}> Subscribe </Button>
        </div>
    </div>
   
</div>
))}
    </div>
</section>
<hr style={{marginTop:"20px"}}/>
<section  style={{paddingTop:"20px"}}>
    <h2> Uploads</h2>
    <div className='channeluploads'>
    <video className='channelvedio' width="100%"  controls>
          <source src={"videoUrl"} type="video/mp4" />
        </video>
        <div>
            <div>
               <div>
               <h4>hello</h4>
               <div>
               <label>2 views</label>
                <label>4 views</label>
               </div>
               </div>
<IoMdMore/>
            </div>
        </div>
    </div>
</section>
       
    <hr/>
  <section>
    <h2>Subscriptions</h2>
    <div>
        <Avatar src='' alt='pic'/>
        <label> Name</label>
        <label> Subscribers </label>
        <Button>Subscribed</Button>
    </div>
  </section>
    </div>

</Pagelayouts>
  )
}

export default Channel