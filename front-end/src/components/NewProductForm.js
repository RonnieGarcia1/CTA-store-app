import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewProductForm = () => {
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;
    const [products, setProducts] =  useState({
        name: "",
        description: "",
        color: "",
        price: 0,
        image: "",
    });

    const handleTextChange = (event) => {
        setProducts({ ...products, [event.target.id]: event.target.value })
    };

    const addProducts = (newProduct) => {
        axios.post(`${API}/products`, newProduct)
        .then(() => navigate("/products"))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addProducts(products)
    };
    return (
        <div className="new-form">
            <h3 className="new-form-header">Add a new Product to the store.</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Name</label>
                <br></br>
                <input
                    id="name"
                    value={products.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of product" required
                />
                <br></br>
                <br></br>
                <label htmlFor="Description">Description</label>
                <br></br>
                <input
                    id="description"
                    value={products.description}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Description of item" required
                />
                <br></br>
                <br></br>
                <label htmlFor="Color">Color</label>
                <br></br>
                <input
                    id="color"
                    value={products.color}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Colorway" required
                />
                <br></br>
                <br></br>
                <label htmlFor="Price">Price</label>
                <br></br>
                <input
                    id="price"
                    value={products.price}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="Price" required
                />
                <br></br>
                <br></br>
                <label htmlFor="Image">Image</label>
                <br></br>
                <input
                    id="image"
                    value={products.image}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="enter a URL" required
                />
                <br></br>
                <br></br>
                <input type="submit" value="Create New Product" /> 
            </form>
        </div>
    )
}

export default NewProductForm;