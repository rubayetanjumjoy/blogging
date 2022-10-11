import React from 'react'
import { Navbar } from './Navbar'
import { useEffect,useState } from 'react'
import Cards from './Cards'
import { Card } from 'react-bootstrap'
import Footer from './Footer'
const LandingPage = () => {
  const [items,setItems]=useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/blog")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
             setItems(result)
             
          },
          (error) => {
            console.log(error);
          }
        )
  
     
  }, [])
  return (
    <>
    <Navbar/>
     
    <img className="cover" src="https://static.wixstatic.com/media/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg/v1/fill/w_1536,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg"></img>
    
    <div className='container'>
      <div className='row'>
       
              {
               
               items.map((item)=>(
                 <div className='col-4 p-3'>
                 <Cards   item={item} key={item.id} height={'24erm'} width={'350px'}/>
                 </div>
               ))
               
             }
       

      </div>
    </div>
    
    <Footer/>
    
    
    
    </>
    
  )
}

export default LandingPage