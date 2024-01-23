import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },

        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload.item];
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        increaseCart: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.count++;
                } 
                return item;
            });
        },   

        decreaseCart: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id && item.count > 1) {
                    item.count--;
                } 
                return item;
            });
        },  

        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        }
    }
});

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCart,
    decreaseCart,
    setIsCartOpen
} = cartSlice.actions;

export default cartSlice.reducer;