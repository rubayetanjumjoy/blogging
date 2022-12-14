import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'

export const Navbar = () => {
  const [searchkey,setSearchkey]=useState('')
  const [searchResults,setSearchresults]=useState('')
  useEffect(() => {
    if(searchkey!==""){
      fetch(`${process.env.REACT_APP_BASE_URL}/search?q=${searchkey}`)
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
   
  const handleSearch=(e)=>{
    
   setSearchkey(e.target.value)
  }
  
  return (

    <>
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/blog">BLOG</Link>
        </li>
         
        <li className="nav-item">
          <Link className="nav-link " to="/about"  aria-disabled="true">ABOUT</Link>
        </li>
      </ul>
      
      <form className="d-flex">
        <div className='searchinput'>
        <input className="form-control me-2 " type="search"  onChange={handleSearch} placeholder="Search" aria-label="Search" />
        <div>
        <div className="list-group dropdown searchlist "  >
            { 
            
            searchResults && searchResults.map((item)=>(
              <Link  to={`/details/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}} className="list-group-item list-group-item-action item list-group-item-dark" key={item.id}>{item.title}</Link>
            )) 


            }    

        </div>
        </div>
        </div>
        <svg style={{color:'white'}} xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-search mt-1 ms-2" viewBox="0 0 16 16" >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      
     

      </form>
      <img  style={{width:'25px'}} className="ms-3" src='https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png'></img>
      <img  style={{width:'25px'}}  className="m-2" src='https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/48a2a42b19814efaa824450f23e8a253.png'></img>
      <img  style={{width:'25px'}} className=" me-5" src='https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c4b521dd2404cd5a05ed6115f3a0dc8.png'></img>

    </div>
  </div>
</nav>


    
    
    </>
  )
}
