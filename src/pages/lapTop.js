import Nav from "../components/nav";
import Footer from "../components/footer";
import axios from "axios";
import video from "../Images/laptop.mp4";
import video2 from '../Images/video2.mp4'
import ProductContainer from "../components/productContainer";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollMagic from "scrollmagic";

const Computer = () => {
  return (
    <body onLoad={scrollScript}>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"
        integrity="sha512-8Wy4KH0O+AuzjMm1w5QfZ5j5/y8Q/kcUktK9mPUVaUoBvh3QPUZB822W/vy7ULqri3yR8daH3F58+Y8Z08qzeg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
       <div className="intro">
          <video src={video2} className="movideo"></video>
          <button className="filter">By price</button>
        </div>
      <div className="background-products">
       
        <div className="backing-products">
          <div class="main"></div>
        </div>
      </div>

      <Footer />
    </body>
  );
};

function scrollScript() {
  const intro = document.querySelector(".intro");
  const video = intro.querySelector("video");

  const controller = new ScrollMagic.Controller();

  const scene = new ScrollMagic.Scene({
    duration: 6000,
    triggerElement: intro,
    triggerHook: 0,
  })
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

  let acceleration = 0.1;
  let scrollpos = 0;
  let delay = 0;

  scene.on("update", (e) => {
    scrollpos = e.scrollPos/1000;
    console.log(scrollpos);
  });

  setInterval(()=>{
    delay += (scrollpos-delay)*acceleration;
    video.currentTime = scrollpos;
  }, 41.66)
}

export default Computer;
