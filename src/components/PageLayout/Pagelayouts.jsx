import React from 'react'
import { SidebarProvider } from '../../Context/Sidebar'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Sidebar from '../SideBar/Sidebar'
import Main from '../Maim/Main'

const Pagelayouts = ({children}) => {
  return (
<SidebarProvider>
    <Header/>
    <Nav/>
        <Sidebar/>
        <Main>
          {children}
        </Main>
    
</SidebarProvider>
    )
}

export default Pagelayouts