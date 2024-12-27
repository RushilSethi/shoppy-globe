import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { clearCart } from "./store/cartSlice";
import { addOrder } from "./store/ordersSlice";

const OrderPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalBill = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    contact: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const validateForm = () => {
    if (!orderDetails.name.trim()) return "Name is required.";
    if (!orderDetails.address.trim()) return "Address is required.";
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(orderDetails.contact.trim())) return "Invalid email address.";
    return "";
  };

  const handlePlaceOrder = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    alert("Order placed successfully!");
    dispatch(clearCart());
    dispatch(addOrder({ ...orderDetails, totalBill, items: cartItems }));
    navigate("/");
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="p-6 bg-background text-primary min-h-screen mt-10">
        <p className="text-center text-secondary">No items to checkout!</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-background text-primary min-h-screen mt-10">
      <h2 className="text-xl font-bold mb-6">Order Details</h2>
      <p className="text-lg mb-4">Total Bill: ${totalBill.toFixed(2)}</p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm text-secondary mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={orderDetails.name}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${
              error.includes("Name") ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm text-secondary mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={orderDetails.address}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${
              error.includes("Address") ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your address"
          />
        </div>
        <div>
          <label className="block text-sm text-secondary mb-1">Contact</label>
          <input
            type="email"
            name="contact"
            value={orderDetails.contact}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${
              error.includes("email") ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email ID"
          />
        </div>
      </form>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <div className="mt-6 text-center">
        <button
          onClick={handlePlaceOrder}
          className="bg-accentPrimary text-background px-6 py-3 rounded-md font-semibold duration-200 ease-in hover:bg-accentSecondary"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
