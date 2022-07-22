import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
  isLoading: true,
};

var options = {
  method: "GET",
  url: process.env.REACT_APP_URL,
  params: { countryIds: "IN", namePrefix: "del", limit: "5" },
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_HOST,
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
  },
};

export const getCities = createAsyncThunk("city/getCities", async () => {
  axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
});

const placesSlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: {
    [getCities.pending]: (state) => {
      state.isLoading = true;
    },
    [getCities.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [getCities.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default placesSlice.reducer;
