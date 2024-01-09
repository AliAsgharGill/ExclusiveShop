import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";

export const store = configureStore({
  reducer: {
    app: productSlice,
  },
});
