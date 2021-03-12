import React, { useState } from "react";

import TextInput from "../../components/form/TextInput";

const CreateInvoice = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerMobileNo, setCustomerMobileNo] = useState("");
  const [customerGSTNo, setCustomerGSTNo] = useState("");

  const createInvoice = () => {};

  const date = new Date();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="container">
      <h4 className="text-center">Fill Customer Information</h4>
      <div className="row">
        <div className="col"></div>
        <div className="col-md-4">
          <p>
            Date: {date.getDate()}-{months[date.getMonth()]}-
            {date.getFullYear()}
          </p>
        </div>
      </div>
      <form onSubmit={createInvoice}>
        <TextInput
          id="name"
          type="text"
          label="Customer Name"
          placeholder="ex - Manish Sharma Rizal"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <TextInput
          id="address"
          type="text"
          label="Customer Address"
          placeholder="ex - Milan More, Siliguri"
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
          required
        />
        <TextInput
          id="mobileNo"
          type="number"
          label="Customer Mobile No"
          placeholder="ex - 9832098320"
          value={customerMobileNo}
          onChange={(e) => setCustomerMobileNo(e.target.value)}
          required
        />
        <TextInput
          id="gstNo"
          type="text"
          label="Customer GST No (optional)"
          placeholder="Customer GST No"
          value={customerGSTNo}
          onChange={(e) => setCustomerGSTNo(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          Generate Invoice
        </button>
      </form>
    </div>
  );
};

export default CreateInvoice;
