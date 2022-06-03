import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryID: 0,
  sort: {
    name: "популярности",
    sortProp: "rating",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryID(state, action) {
      state.categoryID = action.payload;
    },
    setSelectedSort(state, action) {
      state.sort = {
        ...action.payload,
      };
    },
  },
});

export const { setCategoryID, setSelectedSort } = filterSlice.actions;
export default filterSlice.reducer;
