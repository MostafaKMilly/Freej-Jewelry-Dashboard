import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  setFilter: "",
};

export const globalFilterSlice = createSlice({
  name: "globalFilter",
  initialState,
  reducers: {
    configureGlobalFilter: (state, action) => {
      state.filter = action.payload.filter;
      state.setFilter = action.payload.setFilter;
    },
  },
});

export const { configureGlobalFilter } = globalFilterSlice.actions;

export const selectGlobalFilter = (state) => state.globalFilter;

export default globalFilterSlice.reducer;
