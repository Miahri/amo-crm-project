import {configureStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import dealsReducer from "./deals-reducer";

export const store = configureStore({
  reducer: {
    /*auth: authReducer,*/
    deals: dealsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
});

