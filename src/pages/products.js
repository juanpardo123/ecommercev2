import Nav from "../components/nav";
import React, {useContext} from "react";
import { Context } from "../store";
import Footer from "../components/footer";
import axios from 'axios'
import ProductContainer from "../components/productContainer";
import { useState } from 'react';
import {motion} from 'framer-motion'



const response = await axios('http://localhost:8081/products');
const response2 = await axios('http://localhost:8081/price');
const data = response.data;


const Products = () => {
    const [cart, setCart] = useContext(Context);
    const [productList, setProductList] = useState(data);

    return ( 

        <body onLoad={productScript}>
            
    <div className="background-products">
    <div className="filter-holder">
            <button className="filter" onClick={byPrice}>By price</button>
            </div>
        <div className="backing-products">

            <div class="main">
                <div id="slider" class="hidden-grow">
                <ProductContainer productList= {productList}/>
                </div>
            </div>
        </div>
       
    </div>
   
    <Footer/>
</body>
    );

    function byPrice(){
    setProductList(response2.data)
}

}
 

function productScript(){
    let hamburger = document.querySelector('.hamburger');
let dropmenu = document.querySelector('.button-show');
   
   
   // animations on scroll
   const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
 });

 const hiddenElements = document.querySelectorAll('.hidden , .hidden-left, .hidden-right, .hidden-center, .hidden-center-1 , .hidden-center-2 , .hidden-center-3 , .hidden-center-4, .hidden-grow, .hidden-background, .hidden-up, .hidden-down');

 hiddenElements.forEach((el) => observer.observe(el));



const slider = document.getElementById("slider");
 
}

export default Products;