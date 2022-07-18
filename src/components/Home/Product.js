import React, { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Skeleton from "react-loading-skeleton";
import Header from "../../shared/Header/Header";
// import sofa from '../assets/images/sofa.jpg';
import sofa from '../../assets/images/sofa.jpg';
import sofa2 from '../../assets/images/sofa2.jpg';

import './product.scss';

// import sofa from '../'

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
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
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
//   const thumbs=document.querySelector(".p-image").children;

    function imageChange(event)
{
//   // const thumbs=document.querySelector(".p-image").children;

//   document.querySelector(".pro-img").src=event.children[0].src
//   for(let i=0; i<thumbs.length;i++)
//   {
//     thumbs[i].classList.remove("active");
//   }
//   event.classList.add("active");
}

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


<div className="product-container">

       <div className="p-container">
        <div className="p-image">
        <img src={sofa2} className="pro-img" onClick={imageChange(this)}/>
        </div>
        <div className="child-image">
        <div className="c-image1">
          <img src={sofa2} onClick={imageChange(this)}/>
        </div>
        <div className="c-image2">
          <img src={sofa2} onClick={imageChange(this)} />
        </div>
        <div className="c-image3">
          <img src={sofa2} onClick={imageChange(this)}/>
        </div>
        </div>

       </div>
       <div className="product-content">
        <h3>llana</h3>
        <p>Complete complaints require the physical or electronic signature of the owner. </p>
       <div className="price-details">
       <strong>&#36;</strong>
       <strong>430.99</strong>
       </div>
       <div className="review-container">
       <div className="review">
       <i class="fa fa-star"></i>
       <i class="fa fa-star"></i>
       <i class="fa fa-star"></i>
       <i class="fa fa-star"></i>
       {/* <i class="fa-solid fa-star-half-stroke"></i> */}
       <i class="fa fa-star"></i>
       </div>
       <div className="rating">
       <a href="#">441 Reviews</a>
       </div>
       </div>
       

       <div className="btn-holder">
        <button className="btn-buy">Buy Now</button>
        <button className="btn-add">Add to basket</button>
       </div>
       </div>

       </div>
      
      </>
    );
  };

  return (
    <Fragment>
      <Header />
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
