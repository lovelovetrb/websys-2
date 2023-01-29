import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { data } from "../types/type";

const initialState: data = {
  name: "未回答",
  email: "未回答",
  sex: "male",
  age: 10,
  pref: 1,
  shop: "",
  satisfaction: "未回答",
  frequency: "未回答",
  other: "",
};

export class RootState {
  form = initialState;
}

const slice = createSlice({
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<data>) => {
      return (state = action.payload);
    },
  },
  name: "form",
});

export const { setState } = slice.actions;
export const formReducer = slice.reducer;
