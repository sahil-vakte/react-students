import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="product-card-main-div">
      <div className="product-card-main-div-one">
        <div>
          <div className="product-card-image-div">
            <img
              src={props.image}
              className="img-tag-in-card"
            />
          </div>

          <div className="product-title-price-main-div">
            <div className="title-main-div">
              <p>{props.title}</p>
            </div>
            <div className="price-main-div">
              <p>${props.price}</p>
            </div>
          </div>

          <div className="description-main-div">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
