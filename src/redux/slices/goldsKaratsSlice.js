import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  21: 0,
  isLoading: true,
  errMess: null,
};

export const goldsKaratsSlice = createSlice({
  name: "goldsKarats",
  initialState,
  reducers: {
    getGoldsKarats: (state, action) => {
      state[21] = action.payload[21];
      state.isLoading = false;
      state.errMess = null;
    },
    getGoldsKaratsFailed: (state, action) => {
      state[21] = 0;
      state.isLoading = false;
      state.errMess = action.payload;
    },
    editGoldsKarats: (state, action) => {
      state[21] = action.payload;
    },
  },
});

export const { getGoldsKarats, getGoldsKaratsFailed, editGoldsKarats } =
  goldsKaratsSlice.actions;

export default goldsKaratsSlice.reducer;

export const fetchGoldsKarats = () => (dispatch) => {
  setTimeout(() => {
    dispatch(getGoldsKarats({ 21: 71821 }));
  }, 1000);
};
