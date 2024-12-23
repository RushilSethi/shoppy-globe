import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <strong>Price: ${product.price}</strong>
    </div>
  );
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}

export default ProductItem;
