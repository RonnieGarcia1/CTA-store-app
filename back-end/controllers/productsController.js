//import express
const express = require("express");
const products = express.Router();

//import queries
const { getAllProducts, getOneProduct, createProduct, deleteProduct, updateProduct}= require("../queries/products");

//Get all products
products.get("/", async(req, res) => {
        const allProducts = await getAllProducts();
        if(allProducts[0]){
            res.status(200).json(allProducts);
        } else {
            res.status(500).json({ error: "server error" });
        }

});

//Get one product
products.get("/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const product = await getOneProduct(id);
        if(product.id){
            res.status(200).json(product)
        } else {
            res.status(404).json({error: "server error"})
        }
    }catch(err){
        console.log(err)
    }
});

//Create New Product
products.post("/", async (req, res) => {
    const { body } = req;
    try {
        const createdProduct = await createProduct(body)
        if(createdProduct.id){
            res.status(200).json(createdProduct)
        } else {
            res.status(422).json({error: "error"})
        }
    }catch(err){
        console.log(err)
    }
});

//Delete product by id
products.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await deleteProduct(id);
        if(deletedProduct.id){
            res.status(200).json(deletedProduct)
        } else {
            res.status(404).json({error: "error"})
        }
    }catch(err){
        console.log(err)
    }
});

//Update PRoduct by id
products.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const updatedProduct = await updateProduct(id, body);
    if(updatedProduct.id){
        res.status(200).json(updatedProduct);
    } else {
        res.status(404).json({error: "error"});
    }
});

module.exports = products;