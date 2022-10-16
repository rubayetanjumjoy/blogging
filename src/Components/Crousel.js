import React from 'react'

const Crousel = () => {
  return (
    <>
    
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  src="https://static.wixstatic.com/media/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg/v1/fill/w_1536,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img   src="https://static.wixstatic.com/media/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg/v1/fill/w_1536,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img    src="https://static.wixstatic.com/media/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg/v1/fill/w_1536,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Crousel