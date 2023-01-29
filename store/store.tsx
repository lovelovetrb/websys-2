import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from ".";

const reducer = {
  form: formReducer,
};

const store = configureStore({
  reducer,
});

export default store;
