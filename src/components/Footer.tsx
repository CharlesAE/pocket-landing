import { pocket } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pocketobject } from '../constants'
const Footer = () => {
  return (
    <section   className={`relative main-section`} >
       
    <div className="container px-4 mx-auto">
      <div className="w-full text-center md:items-center pt-24 pb-4 -mx-4">
        <div className="px-4 ">
            <img className="h-8 mx-auto block mb-6" src={pocket} alt={pocketobject.alt} />
          <p className="mb-12  md:text-lg  " >The Island in your pocket.</p>
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