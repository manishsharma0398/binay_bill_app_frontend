import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <div id="footer" className="bg-blue">
      <div className="container">
        <div className="row px-3">
          {" "}
          <small className="ml-4 ml-sm-5">
            Made by Manish Sharma | Copyright © {date.getFullYear()} | All
            rights reserved.
          </small>
          <div className="social-contact ml-4 ml-sm-auto">
            {" "}
            <span className="fa fa-facebook mr-4 text-sm" />{" "}
            <span className="fa fa-google-plus mr-4 text-sm" />{" "}
            <span className="fa fa-linkedin mr-4 text-sm" />{" "}
            <span className="fa fa-twitter mr-4 mr-sm-5 text-sm" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
