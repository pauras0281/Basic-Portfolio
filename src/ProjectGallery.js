import React from "react";
import Aos from "aos";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import all from "./utils/all.jpg";
import create from "./utils/create.jpg";
import myatt from "./utils/myatt.jpg";
import home1 from "./utils/home1.jpg";
import showqr from "./utils/show qr.jpg";
import scan from "./utils/scan.png";
import one from "./utils/one.png";
import three from "./utils/three.png";
import two from "./utils/two.png";
import four from "./utils/four.png";

const ProjectGallery = () => {
  Aos.init();
 

  return (
    <div id="project-gallery" data-aos="fade-right">
      <h1 className="heading">Project Gallery</h1>

      <div className="gallery" data-aos="fade-left">
        <h2 data-aos="fade-down">Attendify - Attendance system with QR and OTP functionality</h2>

        <Carousel className="carousel" infiniteLoop={true} autoPlay={true} interval={2500} width={900} showArrows={true}>
                <div>
                    <img src={all} alt="" />
     
                </div>
                <div>
                    <img src={create} />
                </div>
                <div>
                    <img src={home1} />
                </div>
                <div>
                    <img src={myatt} />
                </div>
                <div>
                    <img src={showqr} />
                </div>
                <div>
                    <img src={scan} />
                </div>
            </Carousel>
        
      </div>

      <div className="gallery" data-aos="fade-right">

      <Carousel infiniteLoop={true} autoPlay={true} interval={2500} width={900} showArrows={true}>
                <div>
                    <img src={one} alt="" />
     
                </div>
                <div>
                    <img src={three} />
                </div>
                <div>
                    <img src={two} />
                </div>
                <div>
                    <img src={four} />
                </div>
             
            </Carousel>

        <h2 data-aos="fade-up">Flipkart Clone</h2>
      </div>
    </div>
  );
};

export default ProjectGallery;
