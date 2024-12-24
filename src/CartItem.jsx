const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-container rounded-lg shadow-md">
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
        <button
          onClick={() => onRemove(item.id)}
          className="mt-2 text-sm text-accentSecondary hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
