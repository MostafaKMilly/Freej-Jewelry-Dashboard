import { createSlice } from "@reduxjs/toolkit";
import RECEIPTS from "../../shared/Receipts";

const initialState = {
  items: [],
  isLoading: true,
  errMess: null,
};

export const receiptsSlice = createSlice({
  name: "receiptsSlice",
  initialState,
  reducers: {
    getReceipts: (state, action) => {
      state.items = action.payload;
      state.errMess = null;
      state.isLoading = false;
    },
    addReceipt: (state, action) => {
      state.items.push({
        ...action.payload,
        id: state.items[state.items.length - 1] + 1,
      });
    },
  },
});

export const { getReceipts, addReceipt } = receiptsSlice.actions;

export default receiptsSlice.reducer;

export const selectReceipts = (state) => state.receipts.items;

export const fetchReceitps = () => (dispatch) => {
  setTimeout(() => {
    dispatch(getReceipts(RECEIPTS));
  }, 1000);
};
