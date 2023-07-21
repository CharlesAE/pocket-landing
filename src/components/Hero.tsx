import React from 'react'
import { app_store,  google_play,  iphone_screen1, iphone_screen2, iphone_screen3, iphone_case1, iphone_case2,  iphone_case3, pocket, yellow  } from '../assets'
import { pocketlinks } from '../constants'

const Hero = () => {
  return (
    <section  className={`bg-white overflow-hidden bg-pattern pt-24 bg-center relative`} >
       
        <div className="container px-4 mx-auto">
          <div className="text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-gradient-brand background-animate overflow-hidden font-medium rounded-full shadow-sm" >Application</span>
            

          <img className="h-16 mx-auto mb-8" src={pocket} alt="" />
            <h3 className="mb-4 text-4xl md:text-5xl leading-tight  font-bold tracking-tighter" >Pocket Antigua</h3>
            <p className="mb-6 mx-auto text-lg md:text-xl font-light max-w-2xl " >Antigua has lots to offer; restaurants, stores, hand made crafts etc... the problem is you don't know they even exist, what time they open or how to find them, do you?
The solution is Pocket Antigua, we put the island, in your pocket.</p>
            <div className="flex flex-wrap justify-center mb-16">

            {
          pocketlinks.platform.map((platform) => (
            <div className="px-5 " key={platform.id}>
              <a className="w-full md:w-auto mb-3 md:mb-0 md:mr-4" href={platform.url} target='_blank'>
                <img className="mx-auto" src={ 
                  platform.id =='android' ?
                  google_play
                : app_store} alt={pocketlinks.alt} />
              </a>
            </div>
            
            
              
          ))}

              
            </div>
            <div className="relative flex flex-row items-end mx-auto max-w-max">
              <div className="relative z-10">
                <img className="mx-auto h-64 md:h-auto object-cover" src={iphone_case1} alt="" />
                <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-56 md:h-auto mt-2 md:mt-3 -ml-1 object-cover" src={iphone_screen1} alt="" />
              </div>
              <div className="relative z-10 hidden md:block md:-ml-24">
                <img className="mx-auto" src={iphone_case2} alt=""/>
                <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4 -ml-1" src={iphone_screen2} alt="" />
              </div>
              <div className="relative z-10 hidden md:block md:-ml-24">
                <img className="mx-auto" src={iphone_case3} alt="" />
                <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-3 -ml-1" src={iphone_screen3} alt="" />
              </div>
              <img className="absolute -left-5 -top-5 w-28 md:w-auto text-pyellow" src={yellow} alt="" />
                
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero