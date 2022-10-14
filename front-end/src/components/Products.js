import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Ticker from "react-ticker";

//importing environmental variable
const API = process.env.REACT_APP_API_URL;

console.log(API);

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`${API}/products`)
      .then((res) => {
          setProducts(res.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);

  console.log(products)

    //Webpage x & y axis set to 0 on click
    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }

  return (
    <div className="products">
      <Ticker className="ticker">
        {({ index }) => (
            <h1>OUR BIGGEST SALE EVER &nbsp;+&nbsp; FREE SHIPPING ON ORDERS OVER $99 &nbsp;&nbsp;+&nbsp;&nbsp;</h1>
        )}
        </Ticker>
        <aside>
            <b>Climbing Gear</b> &nbsp;&nbsp;&nbsp;&nbsp;<b>Mountain Bikes</b>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Footwear</b> &nbsp;&nbsp;&nbsp;&nbsp;<b>Outerwear</b>
        </aside>
        <div>
          <ul>
            <select>
              <option>
                Sort
              </option>
              <option>
                Filter
              </option>
            </select>
          </ul>
        </div>
      <section>
          {products.map((product, id) => {
              return(
                <div className="products-2">
                  <Link onClick={scrollToTop} key={product.id} to={`/products/${product.id}`}>
                    {/* <p><strong>{product.description}</strong></p> */}
                    <img className="product-cards" src={product.image} alt="products"/>
                  </Link>
                    <h4>{product.name}</h4>
                    <em>{product.color}</em>
                  </div>
              )
          })}
      </section>
    </div>
  );
}

export default Products;