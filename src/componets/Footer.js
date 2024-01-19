import React, { useEffect, useState } from "react";
// import './styles/Footer.css';
const Footer = () => {
    const [] = useState(null);
    useEffect(() => {
    }, [])
    return (
        <div>   
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="copyright-box">
            <p class="copyright">&copy; website based on React Js in my <strong>PortFolio</strong></p>
            <div class="credits">
              Designed by <a href="https://bootstrapmade.com/"><strong>Sourabh Shinde</strong></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
        </div>
    )
}
export default Footer;