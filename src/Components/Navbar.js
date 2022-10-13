import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
export const Navbar = () => {
  const [searchkey,setSearchkey]=useState('')
  const [searchResults,setSearchresults]=useState('')
  useEffect(() => {
    if(searchkey!==""){
      fetch(`http://127.0.0.1:8000/search?q=${searchkey}`)
    .then(res => res.json())
    .then(
      (result) => {
        
        setSearchresults(result)

         
      },
      (error) => {
        console.log(error);
      }
    )
   
    }
    if(searchkey==""){
      setSearchresults("")

    }


  
     
  }, [searchkey])
  useEffect(() => {
    console.log(searchkey)
  
    
  }, [searchkey])
  const handleSearch=(e)=>{
    
   setSearchkey(e.target.value)
  }
  
  return (

    <>
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/blog">BLOG</Link>
        </li>
         
        <li class="nav-item">
          <Link class="nav-link " to="/about"  aria-disabled="true">ABOUT</Link>
        </li>
      </ul>
      
      <form class="d-flex">
        <input class="form-control me-2" type="search"  onChange={handleSearch} placeholder="Search" aria-label="Search" style={{position:'relative'}}/>
        <button class="btn btn-outline-light" type="submit" >Search</button>
      
      

      </form>
      <img style={{width:'25px'}} className="ms-2" src='https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png'></img>
      <img  style={{width:'25px'}}  className="m-2" src='https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/48a2a42b19814efaa824450f23e8a253.png'></img>
      <img  style={{width:'25px'}} className=" me-5" src='https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c4b521dd2404cd5a05ed6115f3a0dc8.png'></img>

    </div>
  </div>
</nav>
<div class="list-group"  style={{zIndex:1,position:'absolute',right:0,marginRight:'170px',width:'300px'}}>
{ 
 
searchResults && searchResults.map((item)=>(
  <Link  to={`/details/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}} class="list-group-item list-group-item-action" key={item.id}>{item.title}</Link>
)) 


}    

</div>
    
    
    </>
  )
}
