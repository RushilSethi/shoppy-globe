import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice.jsx";
import cartSlice from "./cartSlice.jsx";
import ordersSlice from "./ordersSlice.jsx";

const productStore = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice,
        orders: ordersSlice
    }
});

export default productStore;
