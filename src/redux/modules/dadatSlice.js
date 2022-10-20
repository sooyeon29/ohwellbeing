// 눌러서 댓글보기페이지

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dadatApi } from "../../mytools/instance";

// thunk 함수
// 댓글 POST! (서버에 저장!)
export const __postDadat = createAsyncThunk(
  "dadats/postDadat",
  async (payload, thunkAPI) => {
    try {
      const { data } = await dadatApi.postDadat(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// 댓글 GET! (화면에 가져오기)
export const __getDadat = createAsyncThunk(
  "dadats/getDadat",
  async (payload, thunkAPI) => {
    try {
      const { data } = await dadatApi.getDadat(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// 댓글 DELET! (지우기)
export const __deleteDadat = createAsyncThunk(
  "dadats/deletDadat",
  async (payload, thunkAPI) => {
    try {
      const { data } = await dadatApi.deleteDadat(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// 댓글 PATCH 수정내용으로 저장!
export const __updateDadat = createAsyncThunk(
  "dadats/updateDadat",
  async (payload, thunkAPI) => {
    try {
      const { newDadat, newDadatId } = payload;
      console.log(newDadat, newDadatId);
      //  인스턴스에서 만들어준 선서와 같게 넣어주어야함
      await dadatApi.patchDadat(newDadatId, newDadat); // 서버한테 보낸상태
      // 위에까지가 데이터베이스를 바꾼 식
      // 서버캐시데이터(서버랑 어플을 똑같이 만들어줘야함)
      // 성공했을때랑 실패했을때를 나눠서 리듀서에 보내준다
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  dadats: [
    {
      id: 0,
      nickname: "",
      memo: "",
      date: "",
    },
  ],
  isLoading: false,
  error: null,
};

export const dadatSlice = createSlice({
  name: "dadats",
  initialState,
  // reducers: {},
  extraReducers: {
    //  POST DADATS!!! 대댓글 추가하기!!
    [__postDadat.pending]: (state) => {
      state.isLoading = true;
    },
    [__postDadat.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dadats.push(action.payload);
      console.log("fulfilled 상태", state, action);
    },
    [__postDadat.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // GET DADATS!!! 대댓글 보여주기!
    [__getDadat.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDadat.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dadats = action.payload;
      console.log("fulfilled 상태", action.payload);
    },
    [__getDadat.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // DELET DADATS!!! 대댓글 지우기!!!
    [__deleteDadat.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteDadat.fulfilled]: (state, action) => {
      state.isLoading = false;
      const deldadat = state.dadats.filter(
        (dadat) => action.payload !== dadat.id
      );
      state.dadats = deldadat;
      console.log("fulfilled 상태", state, action);
    },
    [__deleteDadat.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // PATCH DADATS!!! 대댓글 수정하기!!!
    [__updateDadat.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateDadat.fulfilled]: (state, action) => {
      console.log(action);
      console.log(state.dadats); //현재 눌린시점의 값
      // 액션에 위에서 보내준 payload를 받았음
      let newDadats = state.dadats.map((dadat) => {
        if (dadat.id !== action.payload.newDadatId) {
          return dadat;
        } else {
          return { ...dadat, memo: action.payload.newDadat };
        }
      });
      state.dadats = newDadats;
      state.isLoading = false;
      // state.dadats = action.payload;
      // console.log("fulfilled 상태", state, action);
    },
    [__updateDadat.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const {} = dadatSlice.actions;
export default dadatSlice.reducer;
