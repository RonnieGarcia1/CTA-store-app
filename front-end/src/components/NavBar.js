import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

function NavBar(){
    return(
        <nav>
            <div className="home-btn">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><img className="home-thubnail" alt="mountains" src={"https://cdn.pixabay.com/photo/2021/11/10/07/29/mountain-6783202__340.png"} /></Link>
            </div>
            <Link style={{ textDecoration: 'none', color: 'black' }} component={Link} to={`/products`}>
                <h4 className="nav-btns">Products</h4>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} component={Link} to={`/products/new`}>
                <h4 className="nav-btns">Add Inventory</h4>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }}  component={Link} to={`/about`}>
                <h4 className="nav-btns">About</h4>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }}  component={Link} to={`/careers`}>
                <h4 className="nav-btns">Careers</h4>
            </Link>
            {/* <Loading /> */}
            <Link style={{ textDecoration: 'none', color: 'black' }}  component={Link} to={`/userprofile`}>
                <img className="user-sign-in-logo" alt="user signin" src={"https://cdn-icons-png.flaticon.com/512/456/456212.png"} />
                <h4 className="nav-btns">Profile</h4>
            </Link>
            <LoginButton />
            {/* <AddShoppingCart fontSize="inherit" style={{ fontSize: "200px" }} to={`/cart`} /> */}
            <Link style={{ textDecoration: 'none', color: 'black' }} component={Link} to={`/cart`}>
                <img id="add-to-cart" alt="shopping cart sprite" src={"https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=170667a&w=0&h=kEh5VLsTHukWc7xf2BvUs8ssqS_d7vkK0-xU3MDpO7s="} />
            </Link>
        </nav>
    )
};

export default NavBar;