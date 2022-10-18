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
    fetch(`${process.env.REACT_APP_BASE_URL}/blog`)
        .then(res => res.json())
        .then(
          (result) => {
              
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
                 <div className='col-lg-4 col-sm-12 mt-3'key={item.id} >
                 <Cards   item={item}  size="small"  />
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
