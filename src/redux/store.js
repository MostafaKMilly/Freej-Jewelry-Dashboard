import { configureStore } from "@reduxjs/toolkit";
import globalFilterReducer from "./slices/globalFilterSlice";
import goldsKaratsReducer from "./slices/goldsKaratsSlice";

const store = configureStore({
  reducer: {
    globalFilter: globalFilterReducer,
    goldsKarats: goldsKaratsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["globalFilter/configureGlobalFilter"],
      },
    }),
});

export default store;
