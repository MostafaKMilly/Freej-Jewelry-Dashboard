import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  karats: {
    12: 0,
    14: 0,
    18: 0,
    21: 0,
    22: 0,
    24: 0,
  },
  isLoading: true,
  errMess: null,
};

export const goldsKaratsSlice = createSlice({
  name: "goldsKarats",
  initialState,
  reducers: {
    getGoldsKarats: (state, action) => {
      for (let karat in state.karats) {
        parseInt(karat) === 21
          ? (state.karats[21] = action.payload[21])
          : (state.karats[karat] = parseInt((karat * action.payload[21]) / 21));
      }
      state.isLoading = false;
      state.errMess = null;
    },
    getGoldsKaratsFailed: (state, action) => {
      for (let karat in state.karats) {
        state.karats[karat] = 0;
      }
      state.isLoading = false;
      state.errMess = action.payload;
    },
    editGoldsKarats: (state, action) => {
      for (let karat in state.karats) {
        parseInt(karat) === 21
          ? (state.karats[21] = action.payload)
          : (state.karats[karat] = parseInt((karat * action.payload) / 21));
      }
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
