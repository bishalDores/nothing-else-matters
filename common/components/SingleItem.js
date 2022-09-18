import React from "react";

const SingleItem = ({ product }) => {
  return (
    <div className="single_item_wrapper">
      <div className="price">
        <p>
          <sub>$</sub>
          {product.price}
        </p>
      </div>
      <div className="details">
        <p className="title">{product.title}</p>
        <img src="/images/star.svg" alt="rating" />
        <p className="quantity">Quantity :- 1+</p>
        <button>Shop Now</button>
      </div>
      <div className="image_section">
        <img src={product.image} />
      </div>
    </div>
  );
};

export default SingleItem;
