import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProductForm(){
    const navigate = useNavigate();
    const {id} = useParams();
    const API = process.env.REACT_APP_API_URL;
    const [product, setProduct] = useState({
        name: "",
        description: "",
        color: "",
        price: 0,
        image: "",
    });

    useEffect(() => {
        axios.get(`${API}/products/${id}`)
        .then((res) => {
            setProduct(res.data)
        }).catch((error) => {
            throw error;
        });
    }, [id, API]);

    const handleTextChange = (event) => {
        setProduct({...product, [event.target.id]: event.target.value })
    };

    const handleSubmit = (event) => {
        console.log(product)
        event.preventDefault();
        axios.put(`${API}/products/${id}`, product)
        .then(() => navigate(`/products/${id}`))
        .catch((err) => 
        console.log(err)
        )
    };

    return(
        <div className="new-form">
             <h3 className="new-form-header">Edit Product</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Product Name</label>
                <br></br>
                <input
                    id="name"
                    value={product.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Product Name" required
                />
                 <br></br>
                <br></br>
                <label htmlFor="Description">Description</label>
                <br></br>
                <input
                    id="description"
                    value={product.description}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Product Description" required
                />
                 <br></br>
                <br></br>
                <label htmlFor="Color">Color</label>
                <br></br>
                <input
                    id="color"
                    value={product.color}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="color" required
                />
                 <br></br>
                <br></br>
                <label htmlFor="Price">Price</label>
                <br></br>
                <input
                    id="price"
                    value={product.price}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="Price" required
                />
                 <br></br>
                <br></br>
                <label htmlFor="Image">Image Url</label>
                <br></br>
                <input
                    id="image"
                    value={product.image}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Image url" required
                />
                <br></br>
                <br></br>
                <input type="submit" /> 
            </form>
        </div>
    )
}

export default EditProductForm;