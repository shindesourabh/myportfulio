import React, { useState, use } from "react";

const ProjectDetail = () => {
    const transition = "transform: translate3d(-2944px, 0px, 0px); transition-duration: 0ms;"
    const bagroundImage = "background-image: url(assets/img/overlay-bg.jpg)"
    return (
        <div><div class="hero hero-single route bg-image" style={{ bagroundImage }}>
            <div class="overlay-mf"></div>
            <div class="hero-content display-table">
                <div class="table-cell">
                    <div class="container">
                        <h2 class="hero-title mb-4">Project Details</h2>
                        <ol class="breadcrumb d-flex justify-content-center">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item active">Project Details</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
            <section id="portfolio-details" class="portfolio-details">
                <div class="container">

                    <div class="row gy-12">

                        {/* <div class="col-lg-8">
                            <div class="portfolio-details-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                <div class="swiper-wrapper align-items-center" id="swiper-wrapper-fcf769fca5d0febf" aria-live="off" style={{transition}}><div class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 3" style={{width:'736px'}}>
                                    <img src="assets/img/portfolio-details-3.jpg" alt="" />
                                </div>

                                    <div class="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0" role="group" aria-label="1 / 3"  style={{width:'736px'}}
                                    >
                                        <img src="assets/img/portfolio-details-1.jpg" alt="" />
                                    </div>

                                    <div class="swiper-slide" data-swiper-slide-index="1" role="group" aria-label="2 / 3" style={{width:'736px'}}>
                                        <img src="assets/img/portfolio-details-2.jpg" alt="" />
                                    </div>

                                    <div class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="2" role="group" aria-label="3 / 3" style={{width:'736px'}}>
                                        <img src="assets/img/portfolio-details-3.jpg" alt="" />
                                    </div>

                                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" role="group" aria-label="1 / 3" style={{width:'736px'}}>
                                        <img src="assets/img/portfolio-details-1.jpg" alt="" />
                                    </div></div>
                                <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span></div>
                                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                        </div> */}

                        <div class="col-lg-12">
                            <h3>Project information</h3>

                            <div class="portfolio-info" style={{ border: 'solid 1px' }}>
                                <ul>
                                    <li><strong>Project Name</strong>: Bio-path India</li>
                                    <li><strong>Fremwork</strong>: Angular</li>
                                    <li><strong>Language</strong>: Html ,Css, TypeScript & JavaScript</li>
                                    <li><strong>Project URL</strong>: <a href="https://biopathindia.com/" target="_blank" style={{color:'blue'}}>https://biopathindia.com/</a></li>
                                </ul>
                                <div class="portfolio-description">
                                    <h2>Project detail</h2>
                                    <p>
                                        Worked on Frontend website development for “Bio-Path” websites.<br></br>
                                        This website developed using Angular 13, html, css/bootstrap or angular material.<br></br>
                                        <b>“Bio-Path”</b> website which stores all the information related to <b>medical, pathological test, booking appointment</b> , etc.</p>
                                    <p>Making <b> Bio-Path</b> is fully dyanamic project with a focus on providing Navigations and UI Design for which directs user to relevant information.</p>
                                </div><br></br>
                            </div> <br></br> <br></br>
                            <div class="col-lg-12">
                                <h3>Project information</h3>
                                <div class="portfolio-info" style={{ border: 'solid 1px' }}>
                                    <ul>
                                        <li><strong>Project Name</strong>: Bodhisatva Tv (Mobile App)</li>
                                        <li><strong>Fremwork</strong>: Ionic</li>
                                        <li><strong>Language</strong>: Html, Css, TypeScript & Javascript</li>
                                        <li><strong>Project URL</strong>: <a href="https://play.google.com/store/apps/details?id=com.Oceansottech.bodhisatva_Tv" target="_blank" style={{color:'blue'}}>Link Here</a></li>
                                    </ul>
                                    <div class="portfolio-description">
                                    <h2>Project detail</h2>
                                      <p>
                                            Worked on Mobile development for "Bodhisatva Tv" App.<br></br>
                                            This App developed using Inic,Angular 13, html, css/bootstrap.<br></br>
                                            <b>“Bodhisatva Tv”</b> App which stores all the information related to <b>User problems and its analysis</b>.</p>
                                        <p><b> Bodhisatva Tv</b> is fully dyanamic project with a focus on providing Navigations and UI Design for which directs user to relevant information.</p>
                                    </div><br></br>
                                       <p> <b>About Bodhisatva Tv:</b> <br></br> This TV web site includes farmer's problems and its analysis, political discussion and it's analysis, discussion and analysis of Indian Constitution, information of foreign education.</p>
                                        
                                </div>
                            </div><br></br><br></br>
                            <div class="col-lg-12">
                                <h3>Project information</h3>
                                <div class="portfolio-info" style={{ border: 'solid 1px' }}>
                                    <ul>
                                        <li><strong>Project Name</strong>: KME Book World Records</li>
                                        <li><strong>Fremwork</strong>: Angular</li>
                                        <li><strong>Language</strong>: Html, Css, TypeScript & Javascript</li>
                                        <li><strong>Project URL</strong>: <a href="https://kmeibwr.com/recordgallery" target="_blank" style={{color:'blue'}}>https://kmeibwr.com/recordgallery</a></li>
                                    </ul>
                                    <div class="portfolio-description">
                                        <h2>Project detail</h2>
                                        <p>
                                            Worked on Frontend website development for “KME” websites.<br></br>
                                            This website developed using Angular 13, html, css/bootstrap or angular material.<br></br>
                                            <b>“KME”</b> website which stores all the information related to <b>Books World Records</b>.</p>
                                        <p>Making <b> KME</b> is fully dyanamic project with a focus on providing Navigations and UI Design for which directs user to relevant information.</p>
                                    </div><br></br>
                                </div>
                            </div><br></br><br></br>
                           
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProjectDetail;