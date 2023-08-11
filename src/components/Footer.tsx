import { pocket } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pocketobject } from '../constants'
const Footer = () => {
  return (
    <section   className={`relative main-section`} >

     <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:items-center pt-24 pb-12 -mx-4">
            <div className="w-full md:w-1/4 lg:w-auto px-4">
            <div className="block mb-5 md:mb-0 max-w-max" >
              <a href="/"><img className="h-8 mx-auto" src={pocket} alt={pocketobject.alt} /> 
              </a>
                <p className="  md:text-lg  " >The Island in your pocket.</p>
              </div>
            </div>
            <div className="w-full md:w-3/4 lg:flex-1 px-4">
              <div className="flex flex-wrap justify-end -mx-3 lg:-mx-6">
                <div className="w-full md:w-auto p-3 md:py-0 md:px-6"><a className="inline-block md:text-lg text-black hover:text-brand" href="privacy" >Privacy</a></div>
              </div>
            </div>
          </div>
        </div>  
    
    <div className="border-b "></div>
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap items-center py-12 md:pb-12">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <p  >&copy; 2023 Pocket Antigua. All rights reserved.</p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-wrap md:justify-end -mx-5">
          {
          pocketobject.social.map((social) => (
            <div className="px-5 " key={social.id}>
              <a className="footer-icon text-icon" href={social.url} target='_blank'>
              <FontAwesomeIcon icon={social.icon} size='lg'/>
              </a>
            </div>
            
            
              
          ))}
            
            
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer