import React, { useState, useRef, useEffect } from "react";
import "./Home.scss";

import Header from "../../shared/Header/Header";
import Product from "../../components/Home/Products";
import ReactCarousel from "../../Reusable/carousel";
import Footer from "../../shared/Footer/Footer";

const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch("http://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log("filter::", filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);
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
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    alt=""
                  />
                  <h3> Bags </h3>
                </div>
                <div className="pa__items">
                  <img
                    src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                    alt=""
                  />
                  <h3> Mens </h3>
                </div>
                <div className="pa__items">
                  <img
                    src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                    alt=""
                  />
                  <h3> Jewelery's </h3>
                </div>
                <div className="pa__items">
                  <img
                    src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
                    alt=""
                  />
                  <h3> Electronics </h3>
                </div>
                <div className="pa__items">
                  <img
                    src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
                    alt=""
                  />
                  <h3> Women's </h3>
                </div>
                <div className="pa__items">
                  <img
                    src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg"
                    alt=""
                  />
                  <h3> Mobile Phone </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product />

      <div className="ad__container">
        <div className="ad__content">
          <div className="ad__card__lists">
            <div className="adc__items">
              <img
                src="https://gomonad.com/images/nearby.4150bd3d6c3423b1dfbbaa409406ed29.png"
                alt=""
              />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                pariatur architecto saepe rerum hic similique magni voluptatum
              </p>
            </div>
            <div className="adc__items">
              <img
                src="https://gomonad.com/images/promo2.5e1ca1eb4a2df1ed8686f24e2efaaf6a.png "
                alt=""
              />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                pariatur architecto saepe rerum hic similique magni voluptatum
              </p>
            </div>
            <div className="adc__items">
              <img
                src="https://gomonad.com/images/promo3.00b29366f0a4db65277247f74a9fb70c.png"
                alt=""
              />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                pariatur architecto saepe rerum hic similique magni voluptatum
              </p>
            </div>
          </div>
          <hr />
          <div className="app__content">
            <div className="app__items">
              <h1> Download our App </h1>
              <div className="img__content">
                <img
                  src="https://gomonad.com/images/btn-g.e6fd788e1f93d173dffdb759081cf06c.png"
                  alt=""
                />
                <img
                  src="https://gomonad.com/images/btn-i.2928803a8e87fbab2e101bc38aa1a758.png"
                  alt=""
                />
              </div>
            </div>
            <div className="app__items">
              <img
                src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1997/posts/39422/image-upload/544897A1-ACC9-40F9-8C5F-354468024ACF.jpeg"
                alt=""
                className="app__img"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
