import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";

import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <h1>REACT ROUTER</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/products/:id/info" element={<Details />} />
          <Route path="*" element={ <NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
