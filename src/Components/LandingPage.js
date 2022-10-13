import React from 'react'
import { Navbar } from './Navbar'
import { useEffect,useState } from 'react'
import Cards from './Cards'
import { Card } from 'react-bootstrap'
import Footer from './Footer'
import Crousel from './Crousel'

const LandingPage = () => {
  const [items,setItems]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    setLoading(true)
    fetch("http://127.0.0.1:8000/blog")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
             setItems(result)
             setLoading(false)

             
          },
          (error) => {
            console.log(error);
          }
        )
  
     
  }, [])
  
  return (
    <>
    <Navbar/>
    <Crousel/>
     

    <div className='container p-5' >
      <div className='row'>
       
              {
               loading ? <div style={{marginTop:'1080px'}}>

               </div>
               :
               items.map((item)=>(
                 <div className='col-lg-4 col-sm-12 mt-3' >
                 <Cards   item={item} key={item.id} size="small"  />
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