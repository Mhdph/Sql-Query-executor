import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});
