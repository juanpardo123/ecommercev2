import Nav from "../components/nav";
import React, {useContext} from "react";
import { Context } from "../store";
import Footer from "../components/footer";
import axios from 'axios'
import ProductContainer from "../components/productContainer";
import { useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion'



const response = await axios('http://localhost:8081/products');
const response2 = await axios('http://localhost:8081/price');
const response3 = await axios('http://localhost:8081/type');
const response4 = await axios('http://localhost:8081/priceDesc');

const data = response.data;


const Products = () => {
    const [cart, setCart] = useContext(Context);
    const [productList, setProductList] = useState(data);

    return ( 

        <body >
            
    <div className="background-products">
    <div className="filter-holder">
        <h3 className="sort">sort by:</h3>
            <button className="filter" onClick={byDefault}>A-Z</button>
            <button className="filter" onClick={byPrice}>By price Low-High</button>
            <button className="filter" onClick={byPriceDesc}>By price High-Low</button>
            <button className="filter" onClick={byType}>By Type</button>
            </div>
        <div className="backing-products">

            <div class="main">
            <AnimatePresence>
                <motion.div id="slider" class=""
                initial={{ scale:0 }}
                animate={{ scale:1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 30
                  }}
                  exit={{
                    scale:0
                  }}
                >
                <ProductContainer productList= {productList}/>
                </motion.div>
                    </AnimatePresence>
            </div>
        </div>
       
    </div>
   
    <Footer/>
</body>
    );

    function byPrice(){
    setProductList(response2.data)
}
function byDefault(){
    setProductList(response.data)
}
function byPriceDesc(){
    setProductList(response4.data)
}
function byType(){
    setProductList(response3.data)
}

}
 



export default Products;