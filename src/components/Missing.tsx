import React from 'react'
import { wave } from '../assets'

const Missing = () => {
  return (
    <section  className={`main-section lg:pb-64 relative`} >
       
        <div className="container px-4 mx-auto">
          <div className="text-center">
          <span className="gradient-fill" >Page Not Found</span>
            <div className="flex flex-wrap">
            
            <div className="w-full md:w-2/3 mx-auto md:mb-24">
              <div className="md:max-w-xl mx-auto text-center md:text-left">
              <h3 className="mb-4 text-4xl md:text-5xl leading-tight  font-bold tracking-tighter" >404</h3>
            <p className="mb-6 mx-auto text-lg md:text-xl font-light max-w-2xl " >Something went wrong, the requested URL was not found on this server or the page has been moved or removed from the website.</p>
            
                 <div className="w-full md:w-1/2"><a className="brand-button" href="/">Take Me Home</a></div>
                  
              </div>
            </div>
          </div>
            </div>
          
        </div>
        <img className="absolute top-0 left-0 w-28 md:w-auto" src={wave} alt="" />
        </section>
  )
}

export default Missing