import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

const appStore = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default appStore;
