import { configureStore } from "@reduxjs/toolkit";
import globalFilterReducer from "./slices/globalFilterSlice";

const store = configureStore({
  reducer: {
    globalFilter: globalFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["globalFilter/configureGlobalFilter"],
      },
    }),
});

export default store;
