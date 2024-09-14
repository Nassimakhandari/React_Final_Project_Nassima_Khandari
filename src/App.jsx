
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/About/About.jsx";
import "./index.css";
import Shop from "./pages/Shop/shop.jsx";
import Blog from "./pages/Blog/blog.jsx";
import Navbar from "./layouts/navbar.jsx";
import Footer from "./layouts/footer.jsx";
import Conatct from "./pages/Contact/conatct.jsx";
import DetailsProducts from "./pages/Details/DetailsProducts.jsx";
import { CartProvider }  from './context/index.jsx'; 
import Register from "./pages/authentication/register";
import Login from "./pages/authentication/login";

function App() {
  return (
    <>
    <CartProvider >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Conatct />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/details/:title" element={<DetailsProducts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />
      </CartProvider >
    </>
  );
}

export default App;

