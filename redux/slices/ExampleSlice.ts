import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
  isLoading: false,
  error: false,
  exampleResp: [],
};

export const getExampleData = createAsyncThunk(
  "example/getExampleData",
  async (data: string, thunkAPI) => {
    try {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${data}`
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {},
  extraReducers: {
    // getExampleData
    [getExampleData.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getExampleData.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.error = false;
      state.exampleResp = action.payload;
    },
    [getExampleData.rejected as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default exampleSlice.reducer;
