import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className=' font-montserrat text-primary'>
        
        <Outlet />
        <Footer/>
    </div>
  )
}

export default Layout