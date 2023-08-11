import React from 'react'
import { pocket } from '../assets'
import { pocketobject, privacy } from '../constants'

const Privacy = () => {
  return (
    <section className={`relative main-section`}>
        <div className="container px-4 mx-auto">
          <div >
            <div className='text-center'>
            <span className="gradient-fill " >Application</span>
            </div>
          
            

          <img className="h-16 mx-auto mb-8" src={pocket}  alt={pocketobject.alt} />
            <h3  className='text-center'>Pocket Antigua</h3>
            <h4 className='text-center mb-4'>Privacy Policy</h4>
            <p className="main-paragraph " >{privacy.intro}</p>
            <p className="main-paragraph " >{privacy.policyintro}</p>
            <p className="main-paragraph " >{privacy.policystart}</p>
            <h4>Collection and use</h4>
            <p className="main-paragraph " >{privacy.dataCollected}</p>
                 
            <p className='main-paragraph font-bold'>1. Usage Data</p>
            <p className="main-paragraph " >{privacy.usageData}</p>


            <p className='main-paragraph font-bold'>2. Location Data</p>
            <p className="main-paragraph " >{privacy.locationData}</p>


            <h4>use of data</h4>
            <p className="main-paragraph " >Pocket Antigua uses the collected data for various purposes:</p>
            <p className="main-paragraph " >- To provide and maintain the Service.<br/>
- To notify you about changes to our Service.<br/>
- To allow you to participate in interactive features of our Service when you choose to do so.<br/>
- To provide customer care and support.<br/>
- To provide analysis or valuable information so that we can improve the Service.<br/>
- To monitor the usage of the Service.<br/>
- To detect, prevent and address technical issues.</p>


<h4>transfer of data</h4>
<p className="main-paragraph " >Pocket Antigua does not transfer any data collected.</p>

<h4>service providers</h4>
<p className="main-paragraph " >Pocket Antigua employs third party companies to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
<p className="main-paragraph ">These third parties have access to your Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
            
<p className='main-paragraph font-bold'>Analytics</p>
<p className="main-paragraph " >We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
            
<p className='main-paragraph font-bold'>1. Google Analytics</p>
<p className="main-paragraph " >
Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.<br/>
For more information on the privacy practices of Google, please visit the <a href='https://policies.google.com/privacy'>Google Privacy & Terms</a> web page.
</p>

<p className='main-paragraph font-bold'>2. Firebase</p>
<p className='main-paragraph'>Firebase is an analytics service provided by Google Inc.<br/>
We also encourage you to review <a href='https://support.google.com/analytics/answer/6004245'>Google's policy</a> on safeguarding your data. For more information on what type of information Firebase collects, please visit please visit the <a href='https://policies.google.com/privacy'>Google Privacy & Terms</a> web page.</p>

<h4>external links</h4>
<p className='main-paragraph'>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.

<br/>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

<h4>changes to this privacy policy</h4>
<p className='main-paragraph'>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
</div>
</div>
</section>
  )
}

export default Privacy