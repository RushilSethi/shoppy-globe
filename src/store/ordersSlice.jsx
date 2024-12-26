import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        items: [] 
    },
    reducers:  {
        addOrder: (state, action) => {
            const newOrder = {
                id: Date.now(),
                ...action.payload,
            };
            console.log(newOrder)
            state.items.push(newOrder);
        },        
        emptyOrdersList: (state) => {
            state.items = [];
        },        
    }
})

export const { addOrder, emptyOrdersList } = ordersSlice.actions;
export default ordersSlice.reducer;