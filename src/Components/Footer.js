import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer id="footer">
  <div class="footer-newsletter">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h4>Our Newsletter</h4>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        </div>
        <div class="col-lg-6">
          <form action="" method="post">
            <input type="email" name="email"/>
            <input type="submit" value="Subscribe"/>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  <div class="container">
    <div class="copyright"> &copy; Copyright <strong>
        <span>DevVE</span>
      </strong>. All Rights Reserved </div>
    <div class="credits"> Designed by <a href="#">SalvadorDevVE</a>
    </div>
  </div>
</footer>
    <div/>
    </div>
  )
}

export default Footer