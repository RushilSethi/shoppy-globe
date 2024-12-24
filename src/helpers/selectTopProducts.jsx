const selectTopProducts = (products) => {
  const sortedByRating = [...products].sort((a, b) => b.rating - a.rating);

  const sortedByDiscount = [...products].sort(
    (a, b) => b.discountPercentage - a.discountPercentage
  );

  const topProducts = [];

  topProducts.push(...sortedByRating.slice(0, 2));

  sortedByDiscount.slice(0, 4).forEach((product) => {
    if (!topProducts.some((p) => p.id === product.id)) {
      topProducts.push(product);
    }
  });

  return topProducts.slice(0, 4);
};

export default selectTopProducts;
