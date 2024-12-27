import { useDispatch, useSelector } from "react-redux";
import { emptyOrdersList } from "./store/ordersSlice";

const MyOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.items);

  const handleClearOrders = () => {
    dispatch(emptyOrdersList());
    alert("All orders have been cleared.");
  };

  return (
    <div className="p-6 bg-background text-primary min-h-screen mt-10">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-6">My Orders</h2>

        <div className="flex justify-center py-2">
          <button
            onClick={handleClearOrders}
            className="bg-accentPrimary px-4 text-background rounded-full text-lg font-semibold duration-200 ease-in border-accentPrimary border-2 hover:bg-container hover:text-accentPrimary"
          >
            Clear All Orders
          </button>
        </div>
      </div>

      {orders.length > 0 ? (
        <div className="space-y-4 bg-background">
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-4 bg-container rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">Order ID: {order.id}</h3>
              <p>
                <strong>Name:</strong> {order.name}
              </p>
              <p>
                <strong>Contact:</strong> {order.contact}
              </p>
              <p>
                <strong>Total Amount:</strong> ${order.totalBill}
              </p>
              <p>
                <strong>Order Date:</strong>{" "}
                {new Date(order.id).toLocaleDateString()}
              </p>
              <h4 className="mt-2 font-medium">Items:</h4>

              <ul className="list-disc pl-5">
                {order.items.map((item) => (
                  <li key={item.id}>
                    <div>
                      <strong>{item.title}</strong>  
                      - ${(item.price).toFixed(2)} x {item.quantity}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-secondary">You have no orders yet.</p>
      )}
    </div>
  );
};

export default MyOrders;
