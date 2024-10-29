import React from "react";

const Product = ({ name, price, category, description }) => {
  return (
    <article>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <h3>{category}</h3>
      <p>{description}</p>
    </article>
  );
};

export default Product;
