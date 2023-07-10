import React from "react";
import vanceVIDEOImage from '../Images/vanceVIDEO.png'
import badKittyImage from '../Images/BadKitty.png'
import dinoImage from '../Images/dino.png'
import machineImage from '../Images/machine.png'
import sanctimoniousImage from '../Images/Sanctimonious.png'

const carousel = () => {
    return ( <section class="carousel ">
    <img src={vanceVIDEOImage} class="movieLogo"/>
    <div class="carousel__slider hidden">
        <ul class="carousel__list">
            <li class="carousel__item">
                <span><a href="/products.html"><img src={badKittyImage} class="carousel_img"/></a></span>
            </li>
            <li class="carousel__item">
                <span><a href="/products.html"><img src={dinoImage} class="carousel_img"/></a></span>
            </li>
            <li class="carousel__item">
                <span><a href="/products.html"><img src={machineImage} class="carousel_img"/></a></span>
            </li>
            <li class="carousel__item">
                <span><a href="/products.html"></a><img src={sanctimoniousImage} class="carousel_img"/></span>
            </li>
            <li class="carousel__item">
                <span><a href="/products.html"><img src={badKittyImage} class="carousel_img"/></a></span>
            </li>
            <li class="carousel__item">
                <span><a href="/products.html"><img src={machineImage} class="carousel_img"/></a></span>
            </li>
            <li class="carousel__item" id="spacer">
                <span></span>
            </li>
        </ul>
    </div>
</section> );
}
 
export default carousel;