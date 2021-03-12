import React from "react";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <p className="lead">i am homepage</p>
      <Link className="btn btn-primary" to="/invoices/create">
        Create Invoice
      </Link>
    </div>
  );
}

export default HomePage;
