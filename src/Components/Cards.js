import React from 'react'
import { Heart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
const Cards = ({height,width,item}) => {
  return (
    <div class="card " style={{width: width,height:width}}>
  <img class="card-img-top" src={item.image} alt=""/>
  <div class="card-body overflow-hidden"   >
    <h5 class="card-title">
      <svg width="35" height="30" viewBox="0 0 1000 1000" class="dDcMfv"><circle cx="500" cy="500" r="500" fill="#cccccc"></circle><path fill="#a0a09f" d="M830.8,874.927c-77.344-60.8-187.181-104.877-227.88-111.347-20.335-3.233-20.8-59.1-20.8-59.1s59.746-59.106,72.768-138.584c35.029,0,56.666-84.5,21.631-114.226C677.986,420.37,721.551,206,501,206S324.015,420.37,325.473,451.666c-35.033,29.729-13.4,114.226,21.632,114.226,13.021,79.478,72.77,138.584,72.77,138.584s-0.464,55.871-20.8,59.1c-40.883,6.5-151.537,50.943-228.934,112.176C65.84,784.12,0,649.751,0,500,0,223.858,223.858,0,500,0s500,223.858,500,500C1000,649.3,934.559,783.311,830.8,874.927ZM500,1000h0Z"></path></svg>
      <span className='ms-2' style={{fontSize:15}}>July 7 . 1min</span>
      
    </h5> 
  <h4 className='blogHover'> <Link to={`/details/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>{item.title}</Link></h4>
  <p class="card-text blogHover " >
    <Link to={`/details/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
    {item.description}
</Link> </p>
    
    
  </div>
  <div className='card-footer'>
    <div className='container'>
      
        <div className='row'>
          <div className='col-11'>  <p> 0 Comments</p></div>   
         
           <div className='col-1 '> 
              <div style={{display: 'flex'}} >
               
              <Heart color='red' className='mt-1' />
                
              </div> 
            </div>
        
      </div>
  </div>
</div>
</div>

  )
}
Cards.defaultProps = {
  height: '24erm',
  width: '500px'
}

export default Cards