import React, { Fragment } from "react";
import "./Header.scss";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const state = useSelector((state) => state.handleCart);
  return (
    <Fragment>
      <div className="header__container">
        <div className="header__content">
          {/* Before Header Start */}
          <div className="header__before">
            <div className="header__lists">
              <div className="contact__items">
                <a href="#">
                  <i className="bx bx-headphone"></i> +91 9876543210
                </a>
                <a href="#">
                  <i className="bx bxs-envelope"></i> support@shopping.com
                </a>
              </div>
              <div className="contact__items">
                <a href="#">
                  <i className="bx bx-current-location"></i> Store Location
                </a>
                <a href="#">
                  <i className="bx bxs-offer"></i> Daily Deal
                </a>
                <a href="#">
                  <i className="bx bxs-user"></i> My Account
                </a>
                <a href="#">
                  <i className="bx bx-power-off"></i> Login
                </a>
                <Link to="/cart" className="btn btn-outline-dark ms-s">
                  <i className="bx bx-power-off"></i> Cart ({state.length})
                </Link>
              </div>
            </div>
          </div>
          {/* Before Header End */}

          <div className="header__logo__container">
            <div className="hl__content">
              <div className="hl__lists">
                <figure>
                  <Link to="/">
                    <img
                      src="http://crm.wpos.live/static/media/logo.a899c285c6a2e5962cdc.png"
                      alt=""
                    />
                  </Link>
                </figure>
                <div className="search__content">
                  <div className="all-category">
                    All&nbsp;Category <i className="bx bxs-chevron-down"></i>
                  </div>
                  <input type="text" placeholder="Search Product Here..." />
                  <i className="bx bx-search-alt-2"></i>
                </div>
                <div className="icons">
                  <i className="bx bx-heart"></i>
                  <i className="bx bxs-user-circle"></i>
                  <i className="bx bx-cart"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="header__link__container">
            <div className="hl__content">
              <a href="#" className="btn-category">
                <i className="bx bx-menu"></i> Category
              </a>

              <ul>
                <li>
                  <Link to="/"> Home </Link>
                </li>
                <li>
                  <Link to="/products"> Product </Link>
                </li>
                <li>
                  <Link to="/"> Service </Link>
                </li>
                <li>
                  <Link to="/"> Shop </Link>
                </li>
                <li>
                  <Link to="/"> Pages </Link>
                </li>
                <li>
                  <Link to="/"> Blog </Link>
                </li>
                <li>
                  <Link to="/"> Contact&nbsp;Us </Link>
                </li>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
