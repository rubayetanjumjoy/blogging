import React from 'react'

const Crousel = () => {
  return (
    <>
    
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://static.wixstatic.com/media/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg/v1/fill/w_1536,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img   src="https://static.wixstatic.com/media/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg/v1/fill/w_1536,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img    src="https://static.wixstatic.com/media/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg/v1/fill/w_1536,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_1460818e3dcb48c4becf6c58db8038ef.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Crousel