import React, { useEffect, useState } from "react";
import './styles/Home.css'
import { Link } from "react-router-dom";
const Home = () => {
  const heroStyle = {
    backgroundImage: 'url(assets/img/hero-bg.jpg)',
  };
  const [] = useState(null);
  useEffect(() => {
  }, [])
  return (
    <div>
      <section>
        <div id="hero" class="hero route bg-image" style={heroStyle}>
          <div class="overlay-itro"></div>
          <div class="hero-content display-table">
            <div class="table-cell">
              <div class="container">
                {/* <p class="display-6 color-d">Hello, world!</p> */}
                <h1 class="hero-title mb-4">I am Sourabh Shinde</h1>
                <p class="hero-subtitle">
                  <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer" style={{ fontSize: '20px' }}> Forntend Developer </span>
                  <span class="typed-cursor typed-cursor--blink" aria-hidden="true" style={{ fontSize: '20px' }}>| Mobile Developer </span></p>
                {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <main id="main">
      <section id="services" class="services-mf pt-5 route">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="title-box text-center">
                  <h3 class="title-a">
                    Experience
                  </h3>
                  <p class="subtitle-a">
                    Angualr And Ionic developer.
                  </p>
                  <div class="line-mf"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div>

                  <div class="service-content">
                    <h2 class="s-title"><u>Ocean Software technologies Pvt Ltd</u></h2><br></br>
                    <p><b style={{ display: 'flex', float: 'left', }} >(Angualr & Ionic Developer )</b>
                      <b style={{ display: 'flex', float: 'Right' }}>Join Date :<span> 17 July 2022-Current</span></b>
                    </p><br></br>
                    <br></br>
                    <p>
                      <h5 style={{ display: 'flex', float: 'left' }}>Role Description :</h5>
                    </p><br></br>
                    <p>
                      <li>
                        Designed the website to create a more visually appealing, user-friendly experience Collaborated with cross-functional teams</li>
                      <li>including designers and backend developers, to deliver feature-rich and visually appealing applications.
                      </li>
                      <li>
                        Responsible for managing all front End activities using Angular.
                      </li>
                      <li>
                        Build web pages that are more user interactive and Mobile responsive
                      </li>
                      <li>
                        Integrate many plugins such as Data table, up-loader, auto-complete, drop-down. Performed CRUD operation using services.
                      </li>
                      <li>
                        Used the payment gateway.
                      </li>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" class="about-mf sect-pt4 route">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">
              About
            </h3>
            <div class="line-mf"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">
                        <div class="about-img">
                          <img src="assets/img/profileimg.png" class="img-fluid rounded b-shadow-a" alt="" />
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-7">
                        <div class="about-info">
                          <p><span class="title-s">Name: </span> <span>Sourabh Shinde</span></p>
                          <p><span class="title-s">Profile: </span> <span>Frontend developer</span></p>
                          <p><span class="title-s">Email: </span> <span>shindesourabh081@gmail.com</span></p>
                          <p><span class="title-s">Phone: </span> <span>9325949341</span></p>
                          <p><span class="title-s">Linkedin: </span> <span><a href="https://linkedin.com/in/sourabh-shinde-455931253" target="_blank" style={{ color: 'blue' }}>sourabh shinde</a></span></p>
                        </div>
                      </div>
                    </div>
                    <div class="skill-mf">
                      <div class="title-box-2">
                        <h5 class="title-left">
                          Skill
                        </h5>
                      </div>

                      <span>HTML</span> <span class="pull-right">85%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>CSS</span> <span class="pull-right">75%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>ANGULAR</span> <span class="pull-right">60%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>REACT JS</span> <span class="pull-right">40%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>IONIC</span> <span class="pull-right">55%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>TYPESCRIPT</span> <span class="pull-right">60%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>JAVASCRIPT</span> <span class="pull-right">45%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p><b>API Integration</b> :  RESTful APIs</p>
                  </div>
                  <div>
                    <p><b>Version Control</b> :  Git, GitHub,Bitbucket</p>
                  </div>
                  <div>
                    <p><b>Responsive Design</b> : Grid system,Media queries</p>
                  </div> <br></br><br></br><br></br>
                  <div class="col-md-6">
                    <div class="about-me pt-4 pt-md-0">
                      <div class="title-box-2">
                        <h5 class="title-left">
                          About me
                        </h5>
                      </div>

                      <p className="about-text">
                        Hi, I'm <b>Sourabh Shinde</b>, a passionate <b><u>Frontend Developer AND Mobile Developer</u></b> based in Nagpur.
                        With a strong foundation in web technologies and a keen eye for design,
                        I love turning ideas into interactive and user-friendly websites.
                      </p>
                      <p className="about-text">
                        My journey in web development started with a curiosity to create visually appealing and seamless user experiences.
                        I specialize in crafting responsive and dynamic web applications using the latest technologies such as
                        <b>Angular, React.js, Ionic(Mobile Developer), HTML, CSS,TypeScript and JavaScript .</b>
                      </p>
                      <p className="about-text">
                        I am dedicated to staying updated with the ever-evolving landscape of frontend development and am always excited to learn and apply new skills. My goal is to contribute to projects that not only meet but exceed user expectations by focusing on performance, accessibility, and scalability.
                      </p>
                      <p className="about-text">
                        Besides coding, you can find me exploring new design trends, collaborating with fellow developers, or diving into a good book. Let's connect and explore the possibilities of creating exceptional web experiences together!
                      </p>
                    </div>
                  </div>
                  <div class="skill-mf">
                    <div class="title-box-2">
                      <h5 class="title-left">
                      Qualification
                      </h5>
                    </div>
                    <div className="quelification">
                      <p className="about-text">
                      <b><u>B.VOC</u></b> (Bachelor of Vocational) software development.
                      </p>
                      <p className="about-text">
                      <b><u>H.S.C</u></b> from Maharashtra State Board Pune, Higher First Class.
                      </p>
                      <p className="about-text">
                      <b><u>S.S.C</u></b> from Maharashtra State Board, Pune with First Class.
                      </p>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
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
      

       
        
      </main>
    </div>
  )
}
export default Home;