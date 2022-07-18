import React from "react";
import "./style.scss";

import Carousel from "react-bootstrap/Carousel";

function ReactCarousel() {
  return (
    <div className="carousel__container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://media.istockphoto.com/photos/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-picture-id1319625327?b=1&k=20&m=1319625327&s=170667a&w=0&h=FRRQT4yPOTumTJkCOmthHBcRvzoGvqw7drlSlYZhUNo="
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4eZpLMqF13RRX9QrIAniQJG0aLEyweI0TZ9ekxTUCGnZHFdu_l_qyHfBsIPRcR63IwMg&usqp=CAU"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://kevsbest.com/wp-content/uploads/2021/05/5-Best-Supermarkets-in-Charlotte.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ReactCarousel;
