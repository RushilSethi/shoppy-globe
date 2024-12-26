import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeItemFromCart, removeOneFromCart } from "./store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeOneFromCart(item.id));
  }

  function handleRemoveItem() {
    dispatch(removeItemFromCart(item.id));
  }

  return (
    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
      {/* Product Image */}
      <div className="flex items-center gap-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="text-lg font-bold text-primary">{item.title}</h3>
          <p className="text-sm text-secondary">Quantity: {item.quantity}</p>
        </div>
      </div>

      {/* Price and Remove Button */}
      <div className="text-right">
        <p className="text-lg font-semibold text-accentPrimary">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={handleRemove}
            className="px-4 py-2 text-sm text-accentSecondary border border-accentSecondary rounded-md hover:bg-accentSecondary hover:text-background transition duration-300 ease-in-out"
          >
            Remove One
          </button>
          <button
            onClick={handleRemoveItem}
            className="px-4 py-2 text-sm text-accentSecondary border border-accentSecondary rounded-md hover:bg-accentSecondary hover:text-background transition duration-300 ease-in-out"
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
