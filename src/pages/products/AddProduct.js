import React from "react";
import TextInput from "../../components/form/TextInput";

const AddProduct = () => {
  return (
    <div className="container">
      <form>
        <TextInput
          id="name"
          type="text"
          label="Name"
          placeholder="Product Name"
        />
        <TextInput
          id="quantity"
          type="text"
          label="Quantity"
          placeholder="Ex - 1kg, 1litre, 5pc"
        />
        <TextInput
          id="sellingPrice"
          type="number"
          label="Selling Price"
          placeholder="Ex - 5000, 100"
        />

        <button type="submit" className="btn btn-primary">
          Add New Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
