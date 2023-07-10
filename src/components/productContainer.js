const productContainer = (props) => {
    return ( 
<>
{props.productList.map((element, index) => (
 <div class="product-container">
 <img src={element.url}></img>
 <h1>{element.title}</h1>
 <p>{element.description}</p>
 </div> 
          ))}
</>
       

   );
}
 
export default productContainer;