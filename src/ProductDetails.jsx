import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/fetchProducts";
import { setProducts } from "./store/productSlice";


const ProductDetails = () => {
//   const { id } = useParams();
const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const productsData = await fetchProducts();
      dispatch(setProducts(productsData));
      setLoading(false);
    };

    getProducts();
  }, [dispatch]);

  const id = 11;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="mt-16">Product not found</div>;
  }

  return (
    <div className="mt-16">
      <div className="">
        <h1 className="">{product.title}</h1>
        <p className="">{product.category}</p>
      </div>

      <div className="">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="">
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <p><strong>Discount:</strong> {product.discountPercentage}%</p>
        <p><strong>Rating:</strong> {product.rating} / 5</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>SKU:</strong> {product.sku}</p>
      </div>

      <div className="">
        <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
        <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
        <p><strong>Shipping:</strong> {product.shippingInformation}</p>
        <p><strong>Availability:</strong> {product.availabilityStatus}</p>
      </div>

      <div className="">
        <h2>Reviews</h2>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="">
              <p><strong>{review.reviewerName}:</strong> {review.comment}</p>
              <p>Rating: {review.rating} / 5</p>
              <p>Date: {new Date(review.date).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
