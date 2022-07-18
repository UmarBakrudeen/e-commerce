import React, { useState, useRef, Component } from "react";
import "./Home.scss";

import Header from "../../shared/Header/Header";
import Product from "../../components/Home/Products";
import ReactCarousel from "../../Reusable/carousel";
import Footer from "../../shared/Footer/Footer";

const Home = () => {
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

      <div className="product__container">
        <div className="pro__content">
          <div className="pro__header">
            <h1> Why buy From us? </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              praesentium quidem aperiam pariatur, vero ipsa reiciendis
              consequatur. Officia, magni laborum commodi dignissimos et
              laudantium necessitatibus est, sunt praesentium animi deleniti.
            </p>
          </div>
          <div className="pro__action__container">
            <div className="pa__content">
              <div className="pa__header">
                <h6> Product </h6>
                <a href="#"> See More </a>
              </div>
              <div className="pa__lists">
                <div className="pa__items">
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    alt=""
                  />
                  <h3> Mens </h3>
                </div>
                <div className="pa__items">
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    alt=""
                  />
                  <h3> Mens </h3>
                </div>
                <div className="pa__items">
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    alt=""
                  />
                  <h3> Mens </h3>
                </div>
                <div className="pa__items">
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    alt=""
                  />
                  <h3> Mens </h3>
                </div>
                <div className="pa__items">
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    alt=""
                  />
                  <h3> Mens </h3>
                </div>
                <div className="pa__items">
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    alt=""
                  />
                  <h3> Mens </h3>
                </div>
                <div className="pa__items">
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    alt=""
                  />
                  <h3> Mens </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
