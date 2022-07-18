import React, { useState, useEffect } from "react";
import "./Home.scss";

import Header from "../../shared/Header/Header";
import Product from "../../components/Home/Products";
import ReactCarousel from "../../Reusable/carousel";

function Home() {
  return (
    <div>
      <Header />
      <ReactCarousel />

      <div className="promo__container">
        <div className="promo__content">
          <div className="promo__lists">
            <div className="promo__items">
              <i className="fas fa-shipping-fast"></i>
              <div className="details">
                <h3> Free Shopping </h3>
                <p> Free Delivery Over $100 </p>
              </div>
            </div>
            <div className="promo__items">
              <i class="fas fa-undo"></i>
              <div className="details">
                <h3> Free Returns </h3>
                <p> Hasele Free returns </p>
              </div>
            </div>
            <div className="promo__items">
              <i class="fas fa-shield-alt"></i>
              <div className="details">
                <h3> Secure Shopping </h3>
                <p> Best Security Features </p>
              </div>
            </div>
            <div className="promo__items">
              <i class="fas fa-cube"></i>
              <div className="details">
                <h3> Unlimited Blocks </h3>
                <p> Any Content, Any Pages </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
}

export default Home;
