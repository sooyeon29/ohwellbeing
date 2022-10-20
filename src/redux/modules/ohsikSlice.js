import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ohwellApi } from "../../mytools/instance";

const initialState = {
  ohwells: [
    {
      id: 0,
      nickname: "홍길동",
      title: "오늘 점심 메뉴",
      memo: "오늘 점심 샐러드 맛있음",
    },
  ],

  isLoading: false,
  error: null,
};
//get promise
export const __getOhwell = createAsyncThunk(
  "ohwell/getOhwell",
  async (payload, thunkAPI) => {
    try {
      const data = await ohwellApi.getOhwell();
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//post promise
export const __addOhwell = createAsyncThunk(
  "ohwell/postOhwell",
  async (payload, thunkAPI) => {
    try {
      const { data } = await ohwellApi.postOhwell(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//delete promise
export const __deleteOhwell = createAsyncThunk(
  "ohwell/deleteOhwell",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await ohwellApi.deleteOhwell(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//patch promise
export const __patchOhwell = createAsyncThunk(
  "ohwell/patchOhwell",
  async (arg, thunkAPI) => {
    try {
      const patchdata = await ohwellApi.patchOhwell(arg);
      console.log(patchdata);
      return thunkAPI.fulfillWithValue(patchdata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const ohsikSlice = createSlice({
  name: "ohsik",
  initialState,
  reducers: {},
  extraReducers: {
    // pending,fullfilled,rejected에 대해 각각 새로운 state 반환!
    //pending 은 이행 하기 전 상태!
    [__getOhwell.pending]: (state) => {
      state.isLoading = true; //네트워크 요청 시작 로딩 상태 true!
    },
    //fulfilled 은 이행 완료 상태!
    [__getOhwell.fulfilled]: (state, action) => {
      //thunkAPI.fulfillWithValue(data.data) 액션객체가 디스패치 됨.
      state.isLoading = false; //네트워크 요청 끝났으니 false로 변경
      state.ohwells = action.payload;
      console.log("fulfilled 상태", state, action);
    },
    //rejected 는 이행 실패 상태!
    [__getOhwell.rejected]: (state, action) => {
      state.isLoading = false; //에러가 발생했지만 ,네트워크 요청 끝났으니 false로 변경
      state.error = action.payload; //catch 된 error 객체를 state.error에 넣음!
    },
    //post
    [__addOhwell.pending]: (state) => {
      state.isLoading = true;
    },
    [__addOhwell.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ohwells.push(action.payload);
      console.log("fulfilled 상태", state, action);
    },
    [__addOhwell.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //delete
    [__deleteOhwell.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteOhwell.fulfilled]: (state, action) => {
      state.isLoading = false;
      const newOhwell = state.ohwells.filter(
        (item) => item.id !== action.payload
      );

      console.log("fulfilled 상태", state, action);

      state.ohwells = newOhwell;
    },
    [__deleteOhwell.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //patch
    [__patchOhwell.pending]: (state) => {
      state.isLoading = true;
    },
    [__patchOhwell.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ohwells = action.payload;
      console.log("fulfilled 상태", state, action);
    },
    [__patchOhwell.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getToById } = ohsikSlice.actions;
export default ohsikSlice.reducer;
