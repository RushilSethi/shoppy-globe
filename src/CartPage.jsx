import { useSelector, useDispatch } from "react-redux";
import { removeOneFromCart } from "./store/cartSlice";
import CartItem from "./CartItem";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeOneFromCart(id));
  };

  const totalBill = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-background text-primary min-h-screen mt-10">
      {/* Festive Banner */}
      <div className="bg-accentPrimary text-background p-4 rounded-lg mb-6 text-center shadow-md">
        <h2 className="text-lg font-bold">Special Christmas Chocolate</h2>
        <p className="text-sm">Just for $1 this festive season!</p>
      </div>

      <div className="bg-container p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onRemove={handleRemove} />
            ))}
          </div>
        ) : (
          <p className="text-center text-secondary">Your cart is empty. Add some products!</p>
        )}
      </div>

      <div className="mt-6 bg-container p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold">Total Bill</h3>
        <p className="text-xl font-semibold text-accentPrimary">
          ${totalBill.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartPage;
