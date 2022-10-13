import React from 'react'
import { useState,useEffect } from 'react'
import { Navbar } from './Navbar'
import Cards from './Cards'
import Footer from './Footer'
const BlogPage = () => {
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
        <div className='container p-5'>
            <h4> All Post</h4>
            <div className='container'>
              <div className='row justify-content-lg-center ' >
               
              {
                loading ? 
                <div style={{height:'1080px'}}>

                </div> :
                items.map((item)=>(
                  <div className='col-lg-5 col-sm-12 p-2'>
                  <Cards   item={item} key={item.id} h={'700px'} />
                  </div>
                ))
                
              }
              
                
              </div>
            </div>
           
           
             

        </div>
        <Footer/>
    </>
  )
}

export default BlogPage