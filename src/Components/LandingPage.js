import React from 'react'
import { Navbar } from './Navbar'
import Cards from './Cards'
import { Card } from 'react-bootstrap'
import Footer from './Footer'
const LandingPage = () => {
  return (
    <>
    <Navbar/>
     
    <img className="cover" src="https://static.wixstatic.com/media/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg/v1/fill/w_1536,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg"></img>
    <div className='container p-5' >
    <div className='row'> 
    <div className='col-4'>
    <Cards/>
    </div>
    <div className='col-4'>
    <Cards/>
    </div>
    <div className='col-4'>
    <Cards/>
    </div>
     </div>
    </div>
    <div className='container p-5' >
    <div className='row '> 
    <div className='col-4'>
    <Cards/>
    </div>
    <div className='col-4'>
    <Cards/>
    </div>
    <div className='col-4'>
    <Cards/>
    </div>
     </div>
    </div>
     
    
    
    <Footer/>
    
    
    
    </>
    
  )
}

export default LandingPage