import { createReducer, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../common/apis";

const initialState = {
  name: "",
  message: "",
  isSuccess: false,
  bookmark: false,
};

//API Integration with action for registration creation
export const sendMessage = createAsyncThunk(
  "chat/message",
  async ({ message, id ,token}, thunkAPI) => {
    console.log(id, message,token);
    try {
      const response = await fetch(`${API}/Chat/send-message`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
            receiver_id: id,
            message,
          }),
      });
      let data = await response.json();
      console.log(data);
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);


//create slice for authentication reducers

const chatReducer = createSlice({
  name: "chat",
  initialState,

  reducers: {
    // kolType: (action, { payload }) => {
    //   console.log(payload);
    //   return { kolType: payload };
    // },
    // kolName: (action, { payload }) => {
    //   console.log(payload);
    //   return { name: payload };
    // },
  },
  extraReducers: {
    [sendMessage.fulfilled]: (state, action) => {
     
    },
  
  },
});
// export const { kolType, kolName } = kolReducer.actions;
export default chatReducer.reducer;
export const chatSelector = (state) => state.kolListing;
