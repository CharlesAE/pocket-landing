import { app_store,  google_play,  iphone_screen1, iphone_screen2, iphone_screen3, iphone_case1, iphone_case2,  iphone_case3, pocket, yellow  } from '../assets'
import { pocketobject } from '../constants'

const Hero = () => {
  return (
    <section  className={`relative main-section`} >
       
        <div className="container mx-auto">
          <div className="text-center">
          <span className="gradient-fill" >Application</span>
            

          <img className="h-16 mx-auto mb-8" src={pocket}  alt={pocketobject.alt} />
            <h3  >Pocket Antigua</h3>
            <p className="  md:text-lg  mb-6" >The Island in your pocket.</p>
            <p className="main-paragraph " >{pocketobject.intro}</p>
            <div className="flex justify-center mb-12 space-x-2 ">

            {
          pocketobject.platform.map((platform) => (
            <div className="w-auto p-2.5 " key={platform.id}>
              <a className="w-full " href={platform.url} target='_blank'>
                <img className="mx-auto" src={ 
                  platform.id =='android' ?
                  google_play
                : app_store} alt={pocketobject.alt} />
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