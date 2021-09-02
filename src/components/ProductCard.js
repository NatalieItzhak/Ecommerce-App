import React from "react";

export const ProductCard = (props) => {

  const { id, image, title, desc, price } = props;

  return (
    <div className="card">
      <a href={`/product/${id}`}>
        <img
          src={image}
          alt="product"
          className="card__img"
          width="200px"
          height="300px"
        />
      </a>
      <a href={`/product/${id}`}>
        <h2 className="card__title">{title}</h2>
      </a>
      <p className="card__description">{desc}</p>
      <h3 className="card__price">${price}</h3>

    </div>
  );
};
