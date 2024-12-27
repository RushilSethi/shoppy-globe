import { useState, useEffect } from "react";
import selectTopProducts from "./helpers/selectTopProducts";
import { useSelector } from "react-redux";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = useSelector((state) => state.products.items);

  const top4products = selectTopProducts(products);

  const carouselThemes = [
    {
      key: 0,
      content: (
        <div className="flex justify-around items-center p-6 bg-orange-200 rounded-lg shadow-md">
          <div>
            <h2 className="text-2xl font-bold text-orange-800">
              {top4products[0].title}
            </h2>
            <p className="mt-2 text-orange-600">
              Rating: {top4products[0].rating}
            </p>
            <p className="mt-1 text-orange-600">
              Discount: {top4products[0].discountPercentage}%
            </p>
          </div>
          <img
            src={top4products[0].images[0]}
            alt={top4products[0].title}
            className="w-40 h-40 rounded-lg border-4 border-orange-400"
          />
        </div>
      ),
    },
    {
      key: 1,
      content: (
        <div className="flex justify-around items-center p-6 bg-purple-200 rounded-lg shadow-md">
          <div>
            <h2 className="text-2xl font-bold text-purple-800">
              {top4products[1].title}
            </h2>
            <p className="mt-2 text-purple-600">
              Rating: {top4products[1].rating}
            </p>
            <p className="mt-1 text-purple-600">
              Discount: {top4products[1].discountPercentage}%
            </p>
          </div>
          <img
            src={top4products[1].images[0]}
            alt={top4products[1].title}
            className="w-40 h-40 rounded-lg border-4 border-purple-400"
          />
        </div>
      ),
    },
    {
      key: 2,
      content: (
        <div className="flex justify-around items-center p-6 bg-green-200 rounded-lg shadow-md">
          <div>
            <h2 className="text-2xl font-bold text-green-800">
              {top4products[2].title}
            </h2>
            <p className="mt-2 text-green-600">
              Rating: {top4products[2].rating}
            </p>
            <p className="mt-1 text-green-600">
              Discount: {top4products[2].discountPercentage}%
            </p>
          </div>
          <img
            src={top4products[2].images[0]}
            alt={top4products[2].title}
            className="w-40 h-40 rounded-lg border-4 border-green-400"
          />
        </div>
      ),
    },
    {
      key: 3,
      content: (
        <div className="flex justify-around items-center p-6 bg-blue-200 rounded-lg shadow-md">
          <div>
            <h2 className="text-2xl font-bold text-blue-800">
              {top4products[3].title}
            </h2>
            <p className="mt-2 text-blue-600">
              Rating: {top4products[3].rating}
            </p>
            <p className="mt-1 text-blue-600">
              Discount: {top4products[3].discountPercentage}%
            </p>
          </div>
          <img
            src={top4products[3].images[0]}
            alt={top4products[3].title}
            className="w-40 h-40 rounded-lg border-4 border-blue-400"
          />
        </div>
      ),
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselThemes.length);
  };

  const handlePrev = () => {
    if(currentIndex === 0){
      setCurrentIndex(carouselThemes.length - 1);
    }else{
      setCurrentIndex((prevIndex) => (prevIndex - 1));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-10 p-6">
      <div className="rounded-3xl shadow-lg bg-gray-100 p-6">
        {carouselThemes[currentIndex].content}
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-400 text-white hover:bg-gray-500 rounded-full transition duration-300 ease-in-out"
        >
          {/* Prev */}
          <svg
            fill="currentColor"
            height="200px"
            width="200px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 477.175 477.175"
            xmlSpace="preserve"
            className="w-4 h-4"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" />{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-400 text-white hover:bg-gray-500 rounded-full transition duration-300 ease-in-out"
        >
          {/* Next */}
          <svg
            fill="currentColor"
            height="200px"
            width="200px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 477.175 477.175"
            xmlSpace="preserve"
            className="w-4 h-4"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z " />{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
