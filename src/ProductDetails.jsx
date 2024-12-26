import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";
import { addToCart } from "./store/cartSlice";
import placeholderImage from "./assets/placeholder_img.png";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.items);

  const product = products.find((p) => p.id === parseInt(id));
  const cartItem = cartItems.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <NotFound />;
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddItem = () => {
    const totalQuantity = (cartItem?.quantity || 0) + quantity;
    if (totalQuantity <= product.stock) {
      dispatch(addToCart({ item: product, quantity }));
      alert("Added to cart.");
    } else {
      alert("Cannot add more than available stock.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-10 px-6">
      <button className="bg-accentSecondary text-background px-4 py-2 pt-4 rounded-md border-2 border-accentSecondary duration-200 ease-in hover:text-accentSecondary hover:bg-container mb-6">
        <Link to="/">Go Back</Link>
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <div className="bg-container p-4 rounded-lg shadow-md">
            <img
              src={product.images[0] || placeholderImage}
              alt={product.title}
              className="w-full max-w-[30vw] h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary">{product.title}</h1>
            <p className="text-secondary text-sm uppercase tracking-wide">
              {product.category}
            </p>
          </div>
          <p className="text-primary">{product.description}</p>
          <p className="text-2xl font-bold text-accentPrimary">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-secondary">
            <strong>Discount:</strong> {product.discountPercentage}%
          </p>
          <p className="text-accentSecondary">
            <strong>Rating:</strong> {product.rating} / 5
          </p>
          <p className="text-secondary">
            <strong>Stock:</strong> {product.stock}
          </p>

          <div className="flex gap-8">

          <button onClick={handleAddItem} className="bg-accentPrimary text-background px-6 py-2 rounded-md text-lg font-semibold duration-200 ease-in border-accentPrimary border-2 hover:bg-container hover:text-accentPrimary">
            Add {quantity} to Cart
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={decreaseQuantity}
              className={`${quantity === 1 ? "grayscale" : ""} bg-container text-primary w-10 h-10 rounded-full border-2 border-accentPrimary duration-200 ease-in hover:bg-accentPrimary hover:text-background`}
            >
              <strong>-</strong>
            </button>
            <span className="text-primary font-medium">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className={`${quantity === product.stock ? "grayscale" : ""} bg-container text-primary w-10 h-10 rounded-full border-2 border-accentPrimary duration-200 ease-in hover:bg-accentPrimary hover:text-background`}
            >
              <strong>+</strong>
            </button>
          </div>

          
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-accentSecondary pt-6">
        <div className="bg-container p-6 rounded-lg shadow-md space-y-2">
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>SKU:</strong> {product.sku}
          </p>
          <p>
            <strong>Warranty:</strong> {product.warrantyInformation}
          </p>
          <p>
            <strong>Return Policy:</strong> {product.returnPolicy}
          </p>
          <p>
            <strong>Shipping:</strong> {product.shippingInformation}
          </p>
          <p>
            <strong>Availability:</strong> {product.availabilityStatus}
          </p>
        </div>

        <div className="bg-container p-6 rounded-lg shadow-md space-y-4 min-h-[60vh] max-h-[80vh] overflow-y-auto">
          <h2 className="text-xl font-semibold text-primary">Reviews</h2>
          {product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 bg-background rounded-lg shadow-sm text-primary"
              >
                <p className="font-medium text-accentPrimary">
                  {review.reviewerName}:
                </p>
                <p className="text-secondary">{review.comment}</p>
                <p className="text-sm text-accentSecondary">
                  Rating: {review.rating} / 5
                </p>
                <p className="text-sm text-accentSecondary">
                  Date: {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-secondary">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
