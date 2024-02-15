import { Box } from '@mui/material'
import React from 'react'
import { useSidebar } from '../../Context/Sidebar'
import "./Main.css"

const Main = ({children}) => {

    const {isOpen} = useSidebar()
  return (
    <Box as="main" className={`mc-main ${ isOpen ? "active" : "" }`}>{ children }</Box>
    )
}

export default Main