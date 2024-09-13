
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/About/About.jsx";
import "./index.css";
import Shop from "./pages/Shop/shop.jsx";
import Blog from "./pages/Blog/blog.jsx";
import Navbar from "./layouts/navbar.jsx";
import Footer from "./layouts/footer.jsx";
import Conatct from "./pages/Contact/conatct.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Conatct />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

