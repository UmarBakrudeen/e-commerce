import React, { Fragment } from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__first">
            <div className="first__lists">
              <div className="foo__items__left">
                <h6> FOLLOW </h6>
                <div className="social-icons">
                  <a href="#">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-whatsapp"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>

                <div className="first__links">
                  <div className="first__items">
                    <ul>
                      <li>
                        <a href="#">Autumn</a>
                      </li>
                      <li>
                        <a href="#">Winter</a>
                      </li>
                      <li>
                        <a href="#">Spring</a>
                      </li>
                      <li>
                        <a href="#">Summer</a>
                      </li>
                    </ul>
                  </div>
                  <div className="first__items">
                    <ul>
                      <li>
                        <a href="#">Causal </a>
                      </li>
                      <li>
                        <a href="#">Classic</a>
                      </li>
                      <li>
                        <a href="#">Urban</a>
                      </li>
                      <li>
                        <a href="#">Sport</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="foo__items">
                <h6> NEW ARRIVALS DISCOUNTS CONTACT </h6>

                <div className="subscription">
                  <div className="text">
                    Subscribe to get latest on Sales, new releases and more...
                  </div>
                  <div className="search__content">
                    <input type="text" />
                    <button className="btn-subscribe"> SUBSCRIBE </button>
                  </div>
                </div>
                <p> OnlineShopping Powered by Selrom </p>
                <div className="payment__content">
                  <h6> Supported payment systems </h6>
                  <div className="payment__images">
                    <img
                      src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__second">
            <div className="second__content">
              <div className="second__items">
                <ul>
                  <li>
                    <a href="#"> Return Policy </a>
                  </li>
                  <li>
                    <a href="#"> Search our Store </a>
                  </li>
                  <li>
                    <a href="#"> Blog </a>
                  </li>
                  <li>
                    <a href="#"> Contact Us </a>
                  </li>
                  <li>
                    <a href="#"> About Us </a>
                  </li>
                </ul>
              </div>
              <div className="second__items">
                <ul>
                  <li>
                    <a href="#">
                      <i className="bx bxl-facebook"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-whatsapp"></i> Whatsapp
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-twitter"></i> Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-linkedin"></i> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-youtube"></i> Youtube
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-instagram"></i> Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div className="second__items">
                <div className="title">
                  OnlineShopping <br />
                  Powered by <a href="#"> Selrom Software </a>
                </div>
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="footer__third">
            <div className="third__content">
              <div className="third__items">
                <i class="bx bxs-cart-download"></i>
              </div>
              <div className="third__items">
                <p>
                  &#169; 2022 All Rights Reserved Terms of Use and Privacy
                  Policy
                </p>
              </div>
              <div className="third__items">
                <div className="social-icons">
                  <a href="#">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-whatsapp"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
