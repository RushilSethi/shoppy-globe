import PropTypes from "prop-types";
import truncateText from "./helpers/truncateText";
import placeholderImage from "./assets/placeholder_img.png";

const ProductItem = ({ product }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md hover:scale-105 bg-background hover:bg-gray-100 transition-all duration-300 ease-in-out transform cursor-pointer">
      <img src={product.images[0] || placeholderImage} alt={product.title} className="w-full h-auto max-h-80 object-contain mx-auto"/>
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-secondary">{truncateText(product.description)}</p>
      <p className="text-green-500 font-semibold">Price: ${product.price}</p>
    </div>
  );
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}

export default ProductItem;
