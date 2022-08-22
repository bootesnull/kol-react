import { createReducer, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../common/apis";

const initialState = {

  role: {},
  loading:'',
  username: '',
  email: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  statusCode:''
};

//API Integration with action for registration creation
export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ name, email, token, role, password }, thunkAPI) => {
    console.log(name, email, token, role, password);
    try {
      const response = await fetch(`${API}/register`, {
     
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password:password?password:"",
          role_id: role,
          firebase_token: token,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let data = await response.json();
      console.log(data);
      if (response.status == 200 ) {
        if(data?.data?.token){
        localStorage.setItem('token', data.data.token);
        }
        return { ...data };
      }else {
     
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
//login with google
//API Integration with action for registration creation
export const loginWithGoogle = createAsyncThunk(
  "users/loginWithGoogle",
  async ({ name, email, token }, thunkAPI) => {
    console.log(name, email, token);
    try {
      const response = await fetch(`${API}/login-with-google`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password:'',
          firebase_token: token,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let data = await response.json();
      console.log(data);
      if (response.status === 200) {
         localStorage.setItem('token', data.data.token);
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
//Email verification
export const emailVerification = createAsyncThunk(
  "users/verifyEmail",

  async ({ otp, email }, thunkAPI) => {
    try {
      const response = await fetch(`${API}/verify-OTP`, {
        method: "POST",
        body: JSON.stringify({
          otp,
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let data = await response.json();
      console.log(data.token);
      if (response.status === 200) {
        localStorage.setItem('token', data.data.token);
        return { ...data};
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

//resend Email OTP

export const resendEmailOtp = createAsyncThunk(
  "users/resendEmailOtp",

  async (email, thunkAPI) => {
    console.log(email);
    try {
      const response = await fetch(`${API}/resend-OTP`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let data = await response.json();

      return data;
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
//update role when login with google

export const updateRole = createAsyncThunk(
  "users/updateRole",

  async ({role,email}, thunkAPI) => {
    console.log(email,role);
    try {
      const response = await fetch(`${API}/update-role`, {
        method: "PUT",
        body: JSON.stringify({
          email: email,
          role_id:role
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
//Forgot Password
export const forgotPassword = createAsyncThunk(
  "users/forgotPassword",

  async (email, thunkAPI) => {
    console.log(email);
    try {
      const response = await fetch(`${API}/check-email-forgot-password`, {
        method: "PATCH",
        body: JSON.stringify({
          email,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let data = await response.json();
      console.log(data);
      if (response.status === 200) {
        return {
          data,
        };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
//API Integration with action for Login creation
export const LoginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      let data = await response.json();
      console.log(data.data.token);
      if (response.status === 200) {
        if(data?.data?.token){
          localStorage.setItem('token', data.data.token);
          }
          return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
//Api Integration with action set new password when forgot

export const ResetPassword = createAsyncThunk(
  "users/changePassword",
  async ({ otp, newPassword, email }, thunkAPI) => {
    console.log(otp, newPassword, email);
    try {
      const response = await fetch(`${API}/forgot-password  `, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          otp: otp,
          email: email,
          new_password: newPassword,
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
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
//Api Integration with action ChangePassword

export const ChangePasswordUser = createAsyncThunk(
  "users/changePassword",
  async ({ currentPassword, newPassword, token }, thunkAPI) => {
    console.log(currentPassword, newPassword, token);
    try {
      const response = await fetch(`${API}/reset-password`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          old_password: currentPassword,
          new_password: newPassword,
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
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

//create slice for authentication reducers

const authReducer = createSlice({
  name: "user",
  initialState,

  reducers: {
    addRole: (action, state) => {
      return { role: { ...state, ...action.payload } };
    },
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.errorMessage = payload?.message;
      state.email = payload.data?payload.data.email:payload.email;
      state.username = payload.data?payload.data.user_name:'';
     state.statusCode = payload.statusCode;
      // return { registerUser: { ...action.payload } };
    },
    [signupUser.pending]: (state, action) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload?.message;
    },
    [emailVerification.fulfilled]: (state, { payload }) => {

      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.email;
     
      // console.log(action.payload.data);
      // return { loginUser: { ...action.payload.data} };
    },
    [emailVerification.pending]: (state, action) => {
      
      state.isFetching = true;
    },
    [emailVerification.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [forgotPassword.fulfilled]: (state, {payload}) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.errorMessage = payload?.message;
      state.email = payload.data?payload.data.email:payload.email;
      state.username = payload.data?payload.data.user_name:'';
     state.statusCode = payload.statusCode;
    },
    [forgotPassword.pending]: (state, action) => {
    
    },
    [forgotPassword.rejected]: (state, action) => {},
    [ResetPassword.fulfilled]: (state, action) => {
      return { loginUser: { ...action.payload } };
    },
    [ResetPassword.pending]: (state, action) => {},
    [ResetPassword.rejected]: (state, action) => {},
    [LoginUser.fulfilled]: (state, {payload}) => {
      console.log(payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.errorMessage = payload?.message;
      state.email = payload.data?payload.data.email:payload.email;
      state.username = payload.data?payload.data.user_name:'';
     state.statusCode = payload.statusCode;
    },
    [LoginUser.pending]: (state, action) => {

    },
    [LoginUser.rejected]: (state, action) => {},
    [ChangePasswordUser.fulfilled]: (state, {payload}) => {
      console.log(payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.errorMessage = payload?.message;
      state.email = payload.data?payload.data.email:payload.email;
      state.username = payload.data?payload.data.user_name:'';
     state.statusCode = payload.statusCode;
    },
    [ChangePasswordUser.pending]: (state, action) => {},
    [ChangePasswordUser.rejected]: (state, action) => {},
    [loginWithGoogle.fulfilled]: (state, {payload}) => {
      console.log(payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.errorMessage = payload?.message;
      state.email = payload.data?payload.data.email:payload.email;
      state.username = payload.data?payload.data.user_name:'';
     state.statusCode = payload.statusCode;
    },
    [loginWithGoogle.pending]: (state, action) => {
      state.isFetching = true;
    },
    [loginWithGoogle.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
    },
    [updateRole.fulfilled]: (state, action) => {
      return { loginUser: { ...action.payload } };
    },
    [updateRole.pending]: (state, action) => {},
    [updateRole.rejected]: (state, action) => {},
  },
});
export const { addRole,clearState } = authReducer.actions;
export default authReducer.reducer;

export const userSelector = (state) => state?.user;
