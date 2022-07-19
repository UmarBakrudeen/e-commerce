import React, { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Skeleton from "react-loading-skeleton";
import Header from "../../shared/Header/Header";

// import sofa from "../../assets/images/sofa.jpg";
// import sofa2 from "../../assets/images/sofa2.jpg";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="pp__items">
          <Skeleton height={400} />
        </div>
        <div className="text__container">
          <Skeleton height={50} width={300} style={{ lineHeight: 2 }} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        {/* <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50 ">{product.category}</h4>
          <h1 className="display-5">{product.title} </h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="bx bxs-star"> </i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </Link>
        </div> */}

        <div className="product__page__container">
          <div className="pp__content">
            <div className="pp__lists">
              <div className="pp__items">
                <img src={product.image} alt="" className="pro__img" />
                <div className="image__content">
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                </div>
              </div>

              <div className="text__container">
                <div className="text__content">
                  <h1> {product.title} </h1>
                  <div className="desc">{product.description}</div>
                  <div className=" rating ">
                    Rating {product.rating && product.rating.rate}
                    <i className="bx bxs-star"> </i>
                  </div>
                  <div className=" price "> ${product.price}</div>

                  <div className="btn__holder">
                    <button className="btn-buy">Buy Now</button>
                    <a href="/" className="btn-buy">
                      Add to basket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <Fragment>
      <Header />
      {/* <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div> */}
      <div className="main__product">
        <div className="main__product__content">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
