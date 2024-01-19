import React, { useState } from "react";
const About = () => {
  return (
    <div>
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
    </div>
  )
}
export default About;