import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";

const API = process.env.REACT_APP_API_URL;

function ShowOneProduct(){
    const [product, setProduct] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/products/${id}`)
        .then((res) => {
            setProduct(res.data)
        }).catch((error) => {
            throw error;
        })   
    }, [id]);
    
    const handleDelete = () => {
        axios.delete(`${API}/products/${id}`)
        .then((res) => {
            navigate("/products")
        }).catch((error) => {
            throw error;
        });
    };

    console.log(product)

    //PRICE FORMATTER
        
        //NO COMMAS
        
        const financials = () => {
              return Number.parseFloat(product.price).toFixed(2);
          }
          console.log(financials(product.price))
        
        //COMMAS AND DOLLAR SIGNS

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      let formattedPrice = formatter.format(product.price);
      console.log(formattedPrice);

    return(
            <div>
                <div className="show-one">
                <img className="show-one-image"src={product.image} alt="product" />
                    <div className="product-details">
                    <p>{product.name}</p>
                    <p>{product.color}</p>
                    <p>{product.description}</p>
                    <p>{formattedPrice}</p>
                    <Button variant="contained" color="success"><Link to={"/cart"}>Add To Cart</Link></Button>
                    <br></br>
                    <br></br>
                    <Button className="edit-btn" variant="outlined" component={Link} to={`/products/${id}/edit`}>Edit</Button>
                    <Button variant="contained" onClick={handleDelete} color="error">Delete</Button>
                    </div>
                </div>
            </div>
    )
}

export default ShowOneProduct;