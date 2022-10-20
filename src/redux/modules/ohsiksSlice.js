import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ohwellApi } from "../../mytools/instance";

const initialState = {
  ohwell: {},
  isLoading: false,
  error: null,
};
export const __getOhwells = createAsyncThunk(
  "ohwells/getOhwell",
  async (payload, thunkAPI) => {
    try {
      const { data } = await ohwellApi.getOhwells(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateOhwells = createAsyncThunk(
  "ohwells/upadteOhwell",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await ohwellApi.patchOhwell(payload.id, payload.memo);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const ohsiksSlice = createSlice({
  name: "ohsiks",
  initialState,
  reducers: {},
  extraReducers: {
    [__getOhwells.pending]: (state) => {
      state.isLoading = true;
    },
    [__getOhwells.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ohwell = action.payload;
      console.log("fulfilled 상태", state, action);
    },
    [__getOhwells.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //patch 리듀서
    [__updateOhwells.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateOhwells.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ohwell = action.payload;
      console.log("fulfilled 상태", state, action);
    },
    [__updateOhwells.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default ohsiksSlice.reducer;
