
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pocketobject } from '../constants'
const Footer = () => {
  return (
    <section   className={`relative main-section`} >

     
    
    <div className="border-b "></div>
    
    <div className=" mx-auto text-center  ">
      <div className="flex flex-wrap items-center py-12 md:pb-12">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <p  >&copy; 2023 Pocket Antigua. All rights reserved.</p>
        </div>
        <div className="w-full md:w-1/3 space-x-4 ">
        <a className="inline-block md:text-lg text-black hover:text-brand" href="/" >Home </a>
              
                <a className="inline-block md:text-lg text-black hover:text-brand" href="privacy" >Privacy </a>
              </div>
        <div className="w-full md:w-1/3 flex flex-wrap justify-center">
          {
          pocketobject.social.map((social) => (
            <div className="p-5 " key={social.id}>
              <a className="footer-icon text-icon" href={social.url} target='_blank'>
              <FontAwesomeIcon icon={social.icon} size='lg'/>
              </a>
            </div>
            
            
              
          ))}
            
            
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer