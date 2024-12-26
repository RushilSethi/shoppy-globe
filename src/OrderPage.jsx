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
    totalBill: totalBill,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (orderDetails.name && orderDetails.address && orderDetails.contact) {
      alert("Order placed successfully!");
      dispatch(clearCart());
      dispatch(addOrder({...orderDetails, ...cartItems}));
      navigate("/");
    } else {
      alert("Please fill in all the details to place your order.");
    }
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

      <form className="space-y-4">
        <div>
          <label className="block text-sm text-secondary mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={orderDetails.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-secondary mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={orderDetails.address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your address"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-secondary mb-1">Contact</label>
          <input
            type="email"
            name="contact"
            value={orderDetails.contact}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your email ID"
            required
          />
        </div>
      </form>

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
