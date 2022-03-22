import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Project.css";
import modelSis from "../../../src/assets/Projects/modelSis.png";
import bst  from "../../../src/assets/Projects/bst.png";
import snSoftware from "../../../src/assets/Projects/2da0d8_7a5cf7aecbb14ca88b1fe92beb273ee2_mv2.jpeg";
import shape from "../../../src/img/Project/shape-bg.png";
import me from "../../../src/assets/Projects/IMG_7224.JPG";



export default function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"My Projects Details"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="" />
                      This application allows to manage the stocks of Itoc Shipping.<br/>
                      It is developed with the use of Angular and Jhipster.
                              
                     
                    </p>
                  
                  </div>
                  <div className="client-info">
                    <img src={modelSis} alt="no internet connection"></img>
                    <h5>Itoc Shipping Application</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      Finao app allows to manage the call center of Finao.<br/>
                      It is developed with the use of Angular, SpringBoot and Asterisk.
                    
                    </p>
                   
                  </div>
                  <div className="client-info">
                    <img src={bst} alt="no internet connection"></img>
                    <h5>FINAO Call Center</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                     
                    C'perf allows companies to monitor their performance.<br/>
                    It is developed with Thymeleaf Template and SpringBoot.

                   
                    </p>
                   
                  </div>
                  <div className="client-info">
                    <img src={snSoftware} alt="no internet connection"></img>
                    <h5>C'Perf Application</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      This project allows to detect disease on a cassava leaf.<br/>
                      it is developed with the use of python and TensorFlow.
                    </p>
                   
                  </div>
                  <div className="client-info">
                    <img src={me} alt="no internet connection"></img>
                    <h5>Disease Detection cassava Leaf </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    Foutanke is a retail management application developed using Laravel technology.
                    
                    </p>
                   
                  </div>
                  <div className="client-info">
                    <img src={me} alt="no internet connection"></img>
                    <h5>Sales management application of Foutanke's shop</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    PAF  is a  mobile application developed with Android.<br/>
                    This application allows the public to recruit a guard in an agency.
                    
                    </p>
                   
                  </div>
                  <div className="client-info">
                    <img src={me} alt="no internet connection"></img>
                    <h5>Security Guard Tracking Software</h5>
                  </div>
                </div>
              </div>

              
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}