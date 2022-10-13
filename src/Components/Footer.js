import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer id="footer">
  <div class="footer-newsletter">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h4>Bloging Page</h4>
          <p>About Blog Page</p>
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
        <span>blog </span>
      </strong>. All Rights Reserved </div>
    <div class="credits"> Blog <a href="#">www.xyz.com</a>
    </div>
  </div>
</footer>
    <div/>
    </div>
  )
}

export default Footer