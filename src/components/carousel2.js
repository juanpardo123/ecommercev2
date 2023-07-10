import React from "react";
import vanceVIDEOImage from '../Images/vanceVIDEO.png'
import badKittyImage from '../Images/BadKitty.png'
import dinoImage from '../Images/dino.png'
import machineImage from '../Images/machine.png'
import sanctimoniousImage from '../Images/Sanctimonious.png'

const carousel2 = () => {
    return ( 
        <section class="carousel_2">
        <div class="carousel__slider2 hidden">
            <ul class="carousel__list2">
                <li class="carousel__item2">
                    <span><a href="/products.html"><img src={badKittyImage} class="carousel_img"/></a></span>
                </li>
                <li class="carousel__item2">
                    <span><img src={dinoImage} class="carousel_img"/></span>
                </li>
                <li class="carousel__item2">
                    <span><img src={machineImage} class="carousel_img"/></span>
                </li>
                <li class="carousel__item2">
                    <span><img src={sanctimoniousImage} class="carousel_img"/></span>
                </li>
                <li class="carousel__item2">
                    <span><img src= {badKittyImage} class="carousel_img"/></span>
                </li>
                <li class="carousel__item2">
                    <span><img src= {machineImage} class="carousel_img"/></span>
                </li>
                <li class="carousel__item2" id="spacer">
                    <span></span>
                </li>
            </ul>
        </div>
    </section>
     );
}
 
export default carousel2;