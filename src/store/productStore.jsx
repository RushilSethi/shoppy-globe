import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice.jsx";
import cartSlice from "./cartSlice.jsx";

const productStore = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice,
    }
});

export default productStore;
