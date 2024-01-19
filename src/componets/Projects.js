import React from "react";
import { Link } from "react-router-dom";
const Prjects = () =>{
return(
    <div>
         <section id="work" class="portfolio-mf sect-pt4 route">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="title-box text-center">
                  <h3 class="title-a">
                    Projects
                  </h3>
                  <p class="subtitle-a">
                    {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. */}
                  </p>
                  <div class="line-mf"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="work-box">
                  <a href="assets/img/work-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                    <div class="work-img" style={{height:'222px', backgroundColor:'rgb(212 214 216)'}} >
                      <img src="assets/img/biopath-logo.png" alt="" class="img-fluid" style={{marginTop: '60px', marginLeft:'50px'}} />
                    </div>
                  </a>
                  <div class="work-content">
                    <div class="row">
                      <div class="col-sm-8">
                        <h2 class="w-title">Bio-Path : A promise for better life</h2>
                        {/* <div class="w-more">
                          <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                        </div> */}
                      </div>
                      <div class="col-sm-4">
                        <div class="w-like">
                          <Link to="/projectDetails"><span class="bi bi-arrow-down-circle"></span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
              <div class="col-md-4">
                <div class="work-box">
                  <a href="assets/img/work-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                    <div class="work-img"style={{height:'222px',textAlign: 'center',backgroundColor:'rgb(212 214 216)'}}>
                      <img src="assets/img/bodistv.png" alt="" class="img-fluid"style={{height:'222px'}} />
                    </div>
                  </a>
                  <div class="work-content">
                    <div class="row">
                      <div class="col-sm-8">
                        <h2 class="w-title">Bodhisatva Tv (Mobile App)</h2>
                      </div>
                      <div class="col-sm-4">
                        <div class="w-like">
                        <Link to="/projectDetails"> <span class="bi bi-arrow-down-circle"></span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="work-box" >
                  <a href="assets/img/work-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                    <div class="work-img" style={{height:'222px',textAlign: 'center',backgroundColor:'rgb(212 214 216)'}}>
                      <img src="assets/img/kme-logo2.png" alt="" class="img-fluid" style={{height:'150px',marginTop:'40px'}}/>
                    </div>
                  </a>
                  <div class="work-content">
                    <div class="row">
                      <div class="col-sm-8">
                        <h2 class="w-title">KME Book World Records</h2>
                        {/* <div class="w-more">
                          <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                        </div> */}
                      </div>
                      <div class="col-sm-4">
                        <div class="w-like">
                        <Link to="/projectDetails"> <span class="bi bi-arrow-down-circle"></span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div><br></br>
        </section>
    </div>
)
}
export default Prjects;