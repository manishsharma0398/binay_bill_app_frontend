import React, { useState } from "react";

import TextInput from "../../components/form/TextInput";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productSellingPrice, setProductSellingPrice] = useState("");

  const addNewProduct = (e) => {
    e.preventDefault();

    const product = { productName, productQuantity, productSellingPrice };

    console.log(product);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={addNewProduct}>
        <TextInput
          id="name"
          type="text"
          label="Name"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <TextInput
          id="quantity"
          type="text"
          label="Quantity"
          placeholder="Ex - 1kg, 1litre, 5pc"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          required
        />
        <TextInput
          id="sellingPrice"
          type="number"
          label="Selling Price"
          placeholder="Ex - 5000, 100"
          value={productSellingPrice}
          onChange={(e) => setProductSellingPrice(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-blue text-center btn-block">
          Add New Product
        </button>

        {/* <button type="submit" className="btn btn-blue">
          
        </button> */}
      </form>
    </div>
  );
};

export default AddProduct;
