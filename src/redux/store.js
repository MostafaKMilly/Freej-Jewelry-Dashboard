import { configureStore } from "@reduxjs/toolkit";
import globalFilterReducer from "./slices/globalFilterSlice";
import goldsKaratsReducer from "./slices/goldsKaratsSlice";
import receiptsReducer from "./slices/receiptsSlice";

const store = configureStore({
  reducer: {
    globalFilter: globalFilterReducer,
    goldsKarats: goldsKaratsReducer,
    receipts: receiptsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
