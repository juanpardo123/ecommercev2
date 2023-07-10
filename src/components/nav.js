import React from "react";
import logoImage from '../Images/vanceV3.png'

const nav = () => {
    return ( <nav>
        <a href="/"><img src={logoImage}/></a>
        
        <ul class="top-bar">
            <li><a href="/products">Products</a></li>
            <li><a href="/HorizonPage">Get vance Horizon</a></li>
            <li><a href="/contactUs">Contact Us</a></li>
        </ul>
        <div class="hamburger button-show">
            <img src="Images/Rectangle 6.png"/>
        </div>
       
    </nav> );
}
 
export default nav;