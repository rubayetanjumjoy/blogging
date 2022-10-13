import React from 'react'
import { Navbar } from './Navbar'
import Cards from './Cards'
import Footer from './Footer'
import Crousel from './Crousel'
const About = () => {
  return (
    <div>
         <Navbar/>
         <Crousel/>

         <div className='container p-5'>
            <div className='row justify-content center'>
                    <div className='col-lg-6 col-sm-12 p-lg-5' style={{fontSize:20}}>
                    <h4 style={{fontWeight:'bold'}}>Welcome,</h4>
                        <p >
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                         </p>
                         <p>
                         At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wix ellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum. If you’d like to benefit from a professional designer’s touch, head to the Wix Arena and connect with one of our Wix Pro designers. Or if you need more help you can simply type your questions into the Support Forum and get instant answers. To keep up to date with everything Wix, including tips and things we think are cool, just head to the Wix Blog!
                         </p>
                    </div>
                    <div className='col-lg-4 col-sm-12 mt-5 '>
                    <div class="card about" >
                        <img src="https://static.wixstatic.com/media/f61af8_a8bd492674ee47289c1608ffdfc8a5e5.png/v1/crop/x_103,y_0,w_948,h_1069/fill/w_344,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_a8bd492674ee47289c1608ffdfc8a5e5.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">WANT TO CONNECT?</h5>
                            <p class="card-text">Email me at <a href='#'>xyz@gmail.com</a></p>
                         </div>
                        </div>
                    </div>
            </div>

         </div>
         <Footer/>
    </div>
    
  )
}

export default About