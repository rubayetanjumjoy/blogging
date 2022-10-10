import React from 'react'
import { useEffect } from 'react'
import { Navbar } from './Navbar'
import { Heart } from 'react-bootstrap-icons';
import Footer from './Footer';
const Details = () => {
   
    
    
  return (
    <div>
        <Navbar/>
        <div className='details'>
            <div className='container ' style={{paddingLeft:'13%',paddingRight:'13%' }} >
                    <h4 className='mt-2'>ALL Post</h4>
                    <div className='container p-5'>
                    <svg width="35" height="30" viewBox="0 0 1000 1000" class="dDcMfv"><circle cx="500" cy="500" r="500" fill="#cccccc"></circle><path fill="#a0a09f" d="M830.8,874.927c-77.344-60.8-187.181-104.877-227.88-111.347-20.335-3.233-20.8-59.1-20.8-59.1s59.746-59.106,72.768-138.584c35.029,0,56.666-84.5,21.631-114.226C677.986,420.37,721.551,206,501,206S324.015,420.37,325.473,451.666c-35.033,29.729-13.4,114.226,21.632,114.226,13.021,79.478,72.77,138.584,72.77,138.584s-0.464,55.871-20.8,59.1c-40.883,6.5-151.537,50.943-228.934,112.176C65.84,784.12,0,649.751,0,500,0,223.858,223.858,0,500,0s500,223.858,500,500C1000,649.3,934.559,783.311,830.8,874.927ZM500,1000h0Z"></path></svg>
      <span className='ms-2' style={{fontSize:15}}>July 7 . 1min</span>
         <h1 className='mt-3'>10 essentials for the traveling businessman</h1>
         <h4>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</h4>
         <img className='mt-5 ' style={{width:'100%'}} src="https://static.wixstatic.com/media/a27d24_4654ea9011ae477394873f7455e91ce1~mv2.jpg/v1/fill/w_375,h_211,fp_0.50_0.50,q_90,enc_auto/a27d24_4654ea9011ae477394873f7455e91ce1~mv2.jpg" alt="Card image cap"/>
        <h5 className='mt-3'>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.</h5>
        <h5 className='mt-3'>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier. </h5>
         <h4 className='mt-5 font-weight-bold'>Create Relevant Content</h4>
         <h5 className='mt-5'>You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow readers to explore more of what interests them. Each category of your blog has its own page that’s fully customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and help readers search for relevant content. Using hashtags can expand your post reach and help people find the content that matters to them. Go ahead, #hashtag away.</h5> 
         <h5 className='mt-5'>You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow readers to explore more of what interests them. Each category of your blog has its own page that’s fully customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and help readers search for relevant content. Using hashtags can expand your post reach and help people find the content that matters to them. Go ahead, #hashtag away.</h5> 
         <h5 className='mt-5'>You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow readers to explore more of what interests them. Each category of your blog has its own page that’s fully customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and help readers search for relevant content. Using hashtags can expand your post reach and help people find the content that matters to them. Go ahead, #hashtag away.</h5> 
        <footer className='mt-5' >
        <div className='container  border-top border-bottom'>
      
      <div className='row mt-3'>
        <div className='col-11'>  <p> 0 Comments</p></div>     
         <div className='col-1'> <Heart color='red' /></div>
      
    </div>
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