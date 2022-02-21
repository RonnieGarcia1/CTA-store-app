import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import NavBar from './components/NavBar';
import Index from "./pages/Index.js";
import ShowOne from './pages/ShowOne';
import NewProduct from './pages/NewProduct'
import EditProduct from './pages/EditProduct';
import ShoppingCart from './pages/ShoppingCart';
import Footer from './components/Footer';
import FourOFour from './pages/Four0Four';

const App = () => {
  return(
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Index />} />
            <Route exact path="/products/:id" element={<ShowOne />} />
            <Route path="/products/new" element={<NewProduct />} />
            <Route path="/products/:id/edit" element={<EditProduct />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  )
};
export default App;
