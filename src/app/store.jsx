import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";
export const store = configureStore({
  reducer: {
    app: productReducer,
    cart: cartReducer,
  },
});
