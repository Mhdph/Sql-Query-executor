import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
