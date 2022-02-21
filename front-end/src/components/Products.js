import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

//importing environmental variable
const API = process.env.REACT_APP_API_URL;

console.log(API);

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then(
        (response) => {
          setProducts(response.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);

  console.log(products)

  return (
    <div className="products">
      <section>
          {products.map((product, id) => {
              return(
                <Link key={product.id} to={`/products/${product.id}`}>
                    <div className="products-2">
                        {/* <p><strong>{product.description}</strong></p> */}
                        <img className="product-cards" src={product.image} alt="products"/>
                        <p>{product.name}</p>
                        <p>{product.color}</p>
                    </div>
                </Link>
              )
          })}
      </section>
    </div>
  );
}

export default Products;