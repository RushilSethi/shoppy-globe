import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { addToCart } from "./store/cartSlice";
import snowBanner from "./assets/snow_banner.png";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalBill = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/order");
    } else {
      alert(
        "Your cart is empty. Please add some products before checking out."
      );
    }
  };

  const christmasChocolate = {
    id: 2512,
    title: "Special Christmas Chocolate",
    description:
      "A festive chocolate treat, only $1 this season! Perfect for a holiday gift or a sweet indulgence.",
    price: 1.0,
    stock: "infinite",
    images: ["https://i.ibb.co/pPzPNWp/special-chocolate.png"],
    thumbnail: "https://i.ibb.co/pPzPNWp/special-chocolate.png",
  };

  const handleAddChocolateToCart = () => {
    dispatch(addToCart({ item: christmasChocolate, quantity: 1 }));
  };

  return (
      <div className="p-6 bg-background text-primary min-h-screen mt-10">
        {/* Festive Banner */}
        <div
          className="bg-accentPrimary text-background p-4 rounded-lg mb-6 text-center shadow-md cursor-pointer"
          onClick={handleAddChocolateToCart}
          style={{
            backgroundImage: `url(${snowBanner})`, 
            backgroundRepeat: "repeat-x",
            backgroundPosition: "top center",
            backgroundSize: "contain",
            height: "15vh",
          }}
        >
          <h2 className="text-lg font-extrabold tracking-wide">Special Christmas Chocolate</h2>
          <p className="text-md">Just for <b>$1</b> this festive season!</p>
        </div>

      <div className="bg-container p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems.length > 0 ? (
          <div className="space-y-4 bg-background">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-secondary">
            Your cart is empty. Add some products!
          </p>
        )}
      </div>

      <div className="flex justify-between mt-6 bg-container p-6 rounded-lg shadow-m align-center">
        <div>
          <h3 className="text-lg font-bold">Total Bill</h3>
          <p className="text-xl font-semibold text-accentPrimary">
            ${totalBill.toFixed(2)}
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={handleCheckout}
            className="bg-accentPrimary text-background px-6 py-3 rounded-md font-semibold duration-200 ease-in hover:bg-accentSecondary"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
