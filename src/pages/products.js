import Nav from "../components/nav";
import Footer from "../components/footer";
import axios from 'axios'
import ProductContainer from "../components/productContainer";

const response = await axios('http://localhost:8081/products');
const data = response.data;
console.log(data);

const products = () => {
  
    return ( 

        <body onLoad={productScript}>
    <div class="background-products">
        <div class="backing-products">
            <Nav/>

            <div class="main">
                <div id="slider" class="hidden-grow">
                <ProductContainer productList= {data}/>
                </div>
            </div>
        </div>
       
    </div>
   
    <Footer/>
</body>
    );
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
    hamburger.addEventListener('click',function (e) {
        dropmenu.className = "top-bar-show"
     });
}

export default products;