import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import React, {useContext} from "react";
import { Context } from "../store";


const ProductContainer = (props) => {
    const [cart, setCart] = useContext(Context);
    const [selectedId, setSelectedId] = useState(null)
    return ( 
<>
{props.productList.map((element, index) => (
 <motion.div  class="product-container">
<img src={element.url}></img>
<div className="text">
    <h1>{element.title}</h1><br/>
    <h2>Price: {element.title}</h2><br/>
    <h3>Type: {element.title}</h3><br/>
    {/* <p>{element.description}</p> */}
    <button onClick={()=>{
        let item = {
            title: element.title,
            description: element.description
        }
        console.log(element)
        setCart([item,...cart])
    }}>add to cart</button>
</div>

 
 </motion.div> 
          ))}



</>
       

   );
}
 
export default ProductContainer;