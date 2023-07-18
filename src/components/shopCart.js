import React, { useContext, useState } from "react";
import logoImage from "../Images/vanceV3.png";
import { Context } from "../store";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";




const ShopCart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cart, setCart] = useContext(Context);
    useState(() => {
        let sum = 0;
        cart.forEach((element) => {
          sum += element.price;
        });
        setTotalPrice(sum);
      }, [cart]);
    return (  
        <motion.div className="modal" initial={{ x:500 }}
    animate={{ x:0 }}
    transition={{
        type: "spring",
        stiffness: 260,
        damping: 30
      }}
      exit={{
        x:700
      }}
    >
        
        <h1>Your shopping cart:</h1>
         {cart.map((element, index) => (
        <div className="shopHolder">
            <img src={element.url}></img>
            <div className="titleHolder">
            <h1 className="pTitle">{element.title}</h1>
            <h3>{element.type}</h3>

            </div>
      
        <h2>${element.price}</h2>
        </div>
       
      ))}
      <div className="shopHolder">
            {/* <img src={element.url}></img>
            <div className="titleHolder">
            <h1 className="pTitle">{element.title}</h1>
            <h3>{element.type}</h3>

            </div> */}
        <h2>Total Price: </h2>
        <h2>${totalPrice}</h2>
        </div>


    

    </motion.div>
     );
}
 
export default ShopCart;