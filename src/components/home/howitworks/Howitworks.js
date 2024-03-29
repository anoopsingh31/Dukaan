import React from "react";
import "./Howitworks.css";
import Search from "../../../assets/home/howitworks/search.svg";
import Select from "../../../assets/home/howitworks/select.svg";
import Stand from "../../../assets/home/howitworks/stand.png";

const Howitworks = () => {
  return (
    <div className="howitworks-wrapper">
      <div className="search-wrap">
        <div className="howitworks-image">
          <img src={Search} alt=""></img>
        </div>
        <div className="howitworks-heading">
          <h1>Search</h1>
        </div>
        <div className="howitworks-para">
          <p>
            Simply add a keyword or a term related to your business in the
            slogan maker search box. Wait for the magic to happen.
          </p>
        </div>
      </div>
      <div className="select-wrap">
        <div className="howitworks-image">
          <img src={Select} alt=""></img>
        </div>
        <div className="howitworks-heading">
          <h1>Select</h1>
        </div>
        <div className="howitworks-para">
            <p>Choose from thousands of options generated by the slogan maker that fit your needs.</p>
        </div>
      </div>
      <div className="standout-wrap">
        <div className="howitworks-image">
          <img src={Stand} alt=""></img>
        </div>
        <div className="howitworks-heading">
          <h1>Stand Out</h1>
        </div>
        <div className="howitworks-para">
            <p>Congrats on your new slogan. It's time to win the world!</p>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
