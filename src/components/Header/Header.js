import React from 'react'
import { GiHamburgerMenu} from "react-icons/gi"
import { AiFillAudio,AiOutlineVideoCameraAdd } from "react-icons/ai"
import {BsBell} from "react-icons/bs"
import {FaSearch} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
import "./Header.css"
import { useSidebar } from '../../Context/Sidebar'

const Header = () => {
const {toggleSidebar}= useSidebar();

  return (
   <> <div className='header'>
      <div className='start'>
        <GiHamburgerMenu onClick={toggleSidebar}/>
        <img src='./assets/youtube.png' alt='youtube' />
      </div>
      <div className='middle'>
       <div className='middle2'>
        <input type='text' placeholder='Search' />
        <FaSearch className='middleicon'/>
        </div> 
        <AiFillAudio className='middleicon2'/>
      </div>
      <div className='end'>
<AiOutlineVideoCameraAdd/>
<BsBell/>
<CgProfile/>
      </div>
    </div>
   
    </>
    )
}

export default Header