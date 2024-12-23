import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "./store/productSlice";
import { fetchProducts } from "./store/fetchProducts";
import ProductItem from "./ProductItem";

const Products = () => {
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

  return (
    <div className="products-container">
      {loading ? (
        <div className="loader" style={{ textAlign: "center", margin: "20px 0" }}>
            {/* loader */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 150"
            width="100"
            height="50"
          >
            <path
              fill="none"
              stroke="#3C343B"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="300 385"
              strokeDashoffset="0"
              d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
            >
              <animate
                attributeName="stroke-dashoffset"
                calcMode="spline"
                dur="2s"
                values="685;-685"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      ) : (
        <div className="products-list">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
