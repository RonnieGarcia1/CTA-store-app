import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

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
                    <p><b>{product.name}</b></p>
                    <b>Color:&nbsp;&nbsp;&nbsp;</b><em>{product.color}</em>
                    <p>{product.description}</p>
                    <p><strong>{formattedPrice}</strong></p>
                    <Link className="atc-btn" style={{ textDecoration: 'none', color: 'black' }} to={"/cart"}>Add To Cart</Link>
                    <br></br>
                    <br></br>
                    <button><Link className="edit-btn" style={{ textDecoration: 'none', color: 'black' }}  component={Link} to={`/products/${id}/edit`}>Edit</Link></button>
                    <button variant="contained" onClick={handleDelete} color="error">Delete</button>
                    </div>
                </div>
            </div>
    )
}

export default ShowOneProduct;