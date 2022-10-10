import React from 'react'
import { Navbar } from './Navbar'
import Cards from './Cards'
import Footer from './Footer'
const BlogPage = () => {
  return (
    <>
        <Navbar/>
        <div className='container p-5'>
            <h4> All Post</h4>
            <div className='row mt-5'>
                <div className='col-6'>
                    <Cards />
                </div>
                <div className='col-6'>
                     <Cards  />
                </div>
                
                

            </div>
            <div className='row mt-5'>
                <div className='col-6'>
                    <Cards />
                </div>
                <div className='col-6'>
                     <Cards  />
                </div>
                
                

            </div>

        </div>
        <Footer/>
    </>
  )
}

export default BlogPage