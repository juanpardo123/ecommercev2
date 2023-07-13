import React, { useContext, useState } from "react";
import logoImage from "../Images/vanceV3.png";
import { Context } from "../store";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Nav = ({ isVisible }) => {
  const [cart, setCart] = useContext(Context);
  const [show, setShow] = useState(false);
  console.log(cart);
  return (
    <div>
      <nav>
        <Link to="/">
          <img src={logoImage} />
        </Link>
        <ul class="top-bar">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/HorizonPage">Get vance Horizon</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={fshow}
              className="shop"
              id="Filled"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077Z" />
              <circle cx="7" cy="22" r="2" />
              <circle cx="17" cy="22" r="2" />
            </svg>
          </li>
          <li>
            <h1>{cart.length}</h1>
          </li>
        </ul>
      </nav>
      <AnimatePresence>
      {show && <motion.div className="modal" initial={{ x:500 }}
    animate={{ x:0 }}
    transition={{
        type: "spring",
        stiffness: 260,
        damping: 30
      }}
      exit={{
        x:700
      }}
    ></motion.div>}
    </AnimatePresence>
    </div>
  );
  function fshow() {
    setShow(!show);
  }
  function add() {
    setCart([1, ...cart]);
  }
};

export default Nav;
