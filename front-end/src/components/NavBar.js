import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";
import Loading from "./Loading";

function NavBar(){
    return(
        <nav>
            <h1 className="home-btn">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><img className="home-thubnail" alt="mountains" src={"https://cdn.pixabay.com/photo/2021/11/10/07/29/mountain-6783202__340.png"} /></Link>
            </h1>
            <Button variant="outlined" component={Link} to={`/products`}>
                Products
            </Button>
            <Button variant="outlined" component={Link} to={`/products/new`}>
                Add New Products
            </Button>
            <Loading/>
            <Button component={Link} to={`/cart`}>
                <img id="add-to-cart" alt="shopping cart sprite" src={"https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=170667a&w=0&h=kEh5VLsTHukWc7xf2BvUs8ssqS_d7vkK0-xU3MDpO7s="} />
            </Button>
        </nav>
    )
};

export default NavBar;