import selectTopProducts from "./helpers/selectTopProducts.jsx";

const Carousel = () => {

    const carouselThemes = ["", "", "",""];

    const products = [
        {
          id: 1,
          title: "Product 1",
          rating: 4.7,
          discountPercentage: 15,
          images: ["https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"],
        },
        {
          id: 2,
          title: "Product 2",
          rating: 4.8,
          discountPercentage: 10,
          images: ["https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"],
        },
        {
          id: 3,
          title: "Product 3",
          rating: 4.5,
          discountPercentage: 25,
          images: ["https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"],
        },
        {
          id: 4,
          title: "Product 4",
          rating: 4.9,
          discountPercentage: 5,
          images: ["https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"],
        },
        {
          id: 5,
          title: "Product 5",
          rating: 4.3,
          discountPercentage: 30,
          images: ["https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"],
        },
      ];

      const top4products = selectTopProducts(products);


    return (
        <div className="mt-10 p-10">
        <div className="border-2 border-red-500 rounded-3xl flex justify-around">
            <div>
                <div>Best products at best prices</div>
                <div>{top4products[0].title}</div>
                <div>
                    <span>Rating: {top4products[0].rating}</span>
                    <span>Discount: {top4products[0].discountPercentage}</span>
                </div>
            </div>
            <img src={top4products[0].images[0]} />
        </div>
        </div>
    );
}

export default Carousel;