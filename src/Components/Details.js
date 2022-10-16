import React from 'react'
import { useEffect } from 'react'
import { Navbar } from './Navbar'
import { Heart } from 'react-bootstrap-icons';
import Footer from './Footer';
import {  useParams } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';
const Details = () => {
  const [items,setItems]=useState([])
  

   const params=useParams()
   const {blogId}=params
   useEffect(() => {
    fetch(`http://13.229.249.236:8000/blog/${blogId}`)
        .then(res => res.json())
        .then(
          (result) => {
            
             setItems(result)
             
          },
          (error) => {
            console.log(error);
          }
        )
  
     
  }, [blogId])
   
  const timeconvert=(date)=>{
    let date_moment=moment(items.ts_created,"yyyy MM DD HH:mm:ss ZZ")
    let req_format=date_moment.format("DD MMM")
    return req_format
  }
    
    
  return (
    <div>
        <Navbar/>
        <div className='details'>
            <div className='container details' >
                    <h4 className='mt-2'>ALL Post</h4>
                    <div className='container p-5'>
                    <svg width="35" height="30" viewBox="0 0 1000 1000" className="dDcMfv"><circle cx="500" cy="500" r="500" fill="#cccccc"></circle><path fill="#a0a09f" d="M830.8,874.927c-77.344-60.8-187.181-104.877-227.88-111.347-20.335-3.233-20.8-59.1-20.8-59.1s59.746-59.106,72.768-138.584c35.029,0,56.666-84.5,21.631-114.226C677.986,420.37,721.551,206,501,206S324.015,420.37,325.473,451.666c-35.033,29.729-13.4,114.226,21.632,114.226,13.021,79.478,72.77,138.584,72.77,138.584s-0.464,55.871-20.8,59.1c-40.883,6.5-151.537,50.943-228.934,112.176C65.84,784.12,0,649.751,0,500,0,223.858,223.858,0,500,0s500,223.858,500,500C1000,649.3,934.559,783.311,830.8,874.927ZM500,1000h0Z"></path></svg>
      <span className='ms-2' style={{fontSize:15}}>{timeconvert()}</span>
         <h1 className='mt-3'>{items.title}</h1>

         <img className='mt-5 ' style={{width:'100%'}} src={items.image} alt=""/>
        <h5 className='mt-5'>{
         items.description && items.description.split ('\n').map ((items, i) => <p key={i}>{items}</p>)
        }</h5>
        <footer className='mt-5' >
        <div className='container  border-top border-bottom'>
      
     {/* <div className='row mt-3'>
        <div className='col-11'>  <p> 0 Comments</p></div>     
         <div className='col-1'> <Heart color='red' /></div>
      
      </div> */}
      </div>
        </footer>
                    </div>
                    

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Details
