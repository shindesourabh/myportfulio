import React,{ useState,useEffect } from "react";
import './styles/Experience.css'
const Experience = () =>{
    return(
        <div>
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
        </div>
    )
}

export default Experience;