import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer id="footer">
  <div className="footer-newsletter">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h4>Bloging Page</h4>
          <p>About Blog Page</p>
        </div>
        <div className="col-lg-6">
          <form action="" method="post">
            <input type="email" name="email"/>
            <input type="submit" value="Subscribe"/>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  <div className="container">
    <div className="copyright"> &copy; Copyright <strong>
        <span>blog </span>
      </strong>. All Rights Reserved </div>
    <div className="credits"> Blog <a href="#">www.xyz.com</a>
    </div>
  </div>
</footer>
    <div/>
    </div>
  )
}

export default Footer