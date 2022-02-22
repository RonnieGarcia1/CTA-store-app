import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from "./pages/Home.js";
import Index from "./pages/Index.js";
import ShowOne from './pages/ShowOne';
import NewProduct from './pages/NewProduct'
import EditProduct from './pages/EditProduct';
import About from './pages/About';
import UseerProfile from './pages/UserProfile';
import Cart from './pages/Cart';
import FourOFour from './pages/Four0Four';
import Footer from './components/Footer';

const App = () => {
  return(
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Index />} />
            <Route exact path="/products/:id" element={<ShowOne />} />
            <Route path="/products/new" element={<NewProduct />} />
            <Route path="/products/:id/edit" element={<EditProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/userprofile" element={<UseerProfile/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  )
};
export default App;
