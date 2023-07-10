import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Products from "./pages/products";
import HorizonPage from "./pages/HorizonPage";
import ContactUs from "./pages/contactUs";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/HorizonPage" element={<HorizonPage />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    // <div className="App" >
    //   <Home />
    // </div>
  );
}

export default App;
