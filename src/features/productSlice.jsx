import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk(
  "fetch/products",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://65784a9df08799dc8044d036.mockapi.io/CRUD"
    );
    try {
      const result = response.json();
      return result;
    } catch (error) {
      return rejectWithValue("Oops found an error! ", error);
    }

    // console.log(result);
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
