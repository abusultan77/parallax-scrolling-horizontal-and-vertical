
import React, { useEffect } from "react";
import "./bannersec.scss";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Bannersec = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // <script>
  //   $(".slider").owlCarousel({
  //     loop: true,
  //   autoplay: true,
  //   autoplayTimeout: 2000, //2000ms = 2s;
  //   autoplayHoverPause: true,
  //     });
  // </script>

  return (
    <>
      <section className="main-bannersec ">
        <div class="external">
        <a href="https://quecko.com/about-us/" target="_blank" rel="">
        <h1 className="Queckofaily" >QUECKO faimily </h1>
              </a>
       
       
          <div class="horizontal-scroll-wrapper">
     
            <div class="img-wrapper slower">
              <a href="https://quecko.com/about-us/" target="_blank" rel=""><img src="http://quecko.com/wp-content/uploads/2023/02/Alee.png" alt="" />
                <h5 >
                  ALEE ABBASI

                </h5>
                <br></br>

                <p> CEO</p>
              </a>
            </div>

            <div class="img-wrapper faster">

              <a href="https://quecko.com/about-us/" target="_blank" rel="noopener">
                <img src="http://quecko.com/wp-content/uploads/2023/02/Shoaib.png" alt="" />
                <h5>
                  SHOAIB JABBAR
                </h5>
                <br></br>

                <p> MANAGING DIRECTOR</p>
              </a>
            </div>

            <div class="img-wrapper slower vertical">
            <a href="https://quecko.com/about-us/" target="_blank" rel="noopener">
                <img src="http://quecko.com/wp-content/uploads/2023/02/Sharjeel.png" alt="" />
                <h5>
                  SHARJEEL AWAN
                </h5>
                <br></br>

                <p>
                  CHIEF PRODUCT OFFICER
                </p>


              </a>
            </div>

            <div class="img-wrapper slower slower-down">
            <a href="https://quecko.com/about-us/" target="_blank" rel="noopener">
                <img src="http://quecko.com/wp-content/uploads/2023/02/Waleed.png" alt="" />
                <h5>
                  WALEED QURESHI
                </h5>
                <br></br>

                <p>
                  DEVELOPMENT TEAM LEAD
                </p>


              </a>
            </div>

            <div class="img-wrapper">
            <a href="https://quecko.com/about-us/" target="_blank" rel="noopener">
                <img src="http://quecko.com/wp-content/uploads/2023/02/Faiza.png" alt="" />
                <h5>
                  FAIZA MINHAS
                </h5>
                <br></br>

                <p>
                  PEOPLE MANAGER
                </p>


              </a>
            </div>

            <div class="img-wrapper slower">
            <a href="https://quecko.com/about-us/" target="_blank" rel="noopener">
                <img src="http://quecko.com/wp-content/uploads/2023/02/Usman.png" alt="" />

                <h5>
                  USMAN MALIK

                </h5>
                <br></br>

                <p>
                  TEAM LEAD FRONT-END
                </p>
              </a>
            </div>

            <div class="img-wrapper faster1">
            <a href="https://quecko.com/about-us/" target="_blank" rel="noopener">
                <img src="http://quecko.com/wp-content/uploads/2023/02/Zia.png" alt="" />
                <h5>
                  M. ZIA UL REHMAN
                </h5>
                <br></br>
                <p>
                  TEAM LEAD REACT-NATIVE
                </p>



              </a>
            </div>

            <div class="img-wrapper slower slower2">
            <a href="https://quecko.com/about-us/" target="_blank" rel="noopener">
                <img src="http://quecko.com/wp-content/uploads/2023/02/Usama.png" alt="" />
                <h5>
                OSAMA CHATTHA
                </h5>
                <br></br>
                <p>
                TEAM LEAD QA
                </p>
              
             
              </a>
            </div>

            <div class="img-wrapper">
            <a href="https://quecko.com/about-us/" target="_blank" rel="noopener">
                <img src="http://quecko.com/wp-content/uploads/2023/02/Fahad.png" alt="" />
                <h5>
                FAHAD SULEMAN
                </h5>
                <br></br>
                <p>
                CHIEF MARKETING OFFICER
                </p>
           
              </a>
            </div>

            <div class="img-wrapper slower">
            <a href="https://quecko.com/about-us/" target="_blank" rel="noopener">
                <img src="http://quecko.com/wp-content/uploads/2023/02/Salman.png" alt="" />
                <h5>
                RANA SALMAN
                </h5>
                <br></br>
                <p>
                PROJECT MANAGER
                </p>

            

              </a>
            </div>

            <div class="img-wrapper slower last">
            <a href="https://quecko.com/about-us/" target="_blank" rel="noopener">
                <img src="http://quecko.com/wp-content/uploads/2023/02/Jamal.png" alt="" />
            
                <h5>
                JAMAL WASEEM

                </h5>
                <br></br>
                <p>
                TEAM LEAD UI/UX
                </p>
              </a>
            </div>
          </div>
          {/* <p class="scroll-info"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" ><path d="M50,67.1c-0.6,0-1.2-0.2-1.8-0.7c-3.8-3.8-7.7-7.7-11.5-11.5c-2.3-2.3,1.2-5.8,3.5-3.5c2.5,2.5,4.9,4.9,7.4,7.4      c0-13.7,0-27.4,0-41.2c0-0.6,0.2-1.2,0.5-1.5c0,0,0,0,0,0c0.4-0.6,1.1-1,2-0.9c13.7,0.3,26.4,7.2,33.5,19.1      C96.5,55.9,84.7,85,60.2,91.6C35.5,98.2,11.6,79.1,11.1,54c-0.1-3.2,4.9-3.2,5,0c0.3,13.8,8.4,26.4,21.3,31.5      c12.5,5,27.1,1.9,36.6-7.5c9.5-9.5,12.5-24.1,7.5-36.6c-4.8-12.1-16.3-20.1-29-21.2c0,12.8,0,25.5,0,38.3      c2.5-2.5,4.9-4.9,7.4-7.4c2.3-2.3,5.8,1.3,3.5,3.5c-3.9,3.9-7.8,7.8-11.8,11.8C51.2,66.9,50.6,67.1,50,67.1z" /></svg></span> Try scrolling down</p> */}
          <header>
            <p>Postcards from Paris.</p>
            <h1>Css-only parallax horizontal gallery</h1>
            <p>Grab (these and more) photos from - <a href="https://altphotos.com/free/paris/" target="_blank" rel="noopener">altphotos.</a></p>
          </header>
        </div>




      </section>
      {/* <section className="main-bannersec ">
        <div className="container-fluid">
          <div className="row">
            <div className=" col-xl-11 col-lg-11 col-md-12 col-sm-11 m-auto">
              <div className="about_pioneers mt-0">
                <h3 className="pioneers_heading" >tomi Token Inflation and Distribution</h3>
                <img src="\grahhh.svg" alt="" className="img-fluid " />
       
              </div>
            </div>
          </div>
        </div>
  
      </section> */}
    </>
  );
};

export default Bannersec;
