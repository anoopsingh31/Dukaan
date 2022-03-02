import React from "react";
import "./Freeproducts.css";
import FpCrard from "./FpCrard";
import Privacy from "../../../assets/home/freeproducts/privacy.png";
import Terms from "../../../assets/home/freeproducts/terms.png";
import Domain from "../../../assets/home/freeproducts/domain.png";
import Invioce from "../../../assets/home/freeproducts/invoice.png";

const Freeproducts = () => {
  return (
    <div className="freeproducts-outer">
      <div className="freeproducts-heading">
        <h1>Try our other free products</h1>
      </div>
      <div className="freeproducts-wrapper">
        <div className="freeproducts-card-wrap">
          <FpCrard
            img={Privacy}
            head="Privacy Policy Generator"
            para="Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
          />
        </div>
        <div className="freeproducts-card-wrap">
          <FpCrard
            img={Terms}
            head="Terms & Conditions Generator"
            para="Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
          />
        </div>
        <div className="freeproducts-card-wrap">
          <FpCrard
            img={Domain}
            head="Domain Name Generator"
            para="Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
          />
        </div>
        <div className="freeproducts-card-wrap">
          <FpCrard
            img={Invioce}
            head="Invoice Generator"
            para="Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
          />
        </div>
      </div>
    </div>
  );
};

export default Freeproducts;
