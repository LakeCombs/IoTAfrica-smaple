import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const userInfo = Cookie.get("userInfo")
	? JSON.parse(Cookie.get("userInfo"))
	: {};

const initialState = {
	loading: false,
	userInfo,
	error: "",
};

export const userSlice = createSlice({
	name: "userLogin",
	initialState,
	reducers: {
		loginRequest: (state) => {
			state.loading = true;
		},
		loginSuccess: (state, { payload }) => {
			Cookie.set("userInfo", JSON.stringify(payload));
			state.loading = false;
			state.userInfo = payload;
			state.error = "";
		},
		loginFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export const { loginRequest, loginSuccess, loginFailed } = userSlice.actions;
export const userLogin = userSlice.reducer;

export const registerSlice = createSlice({
	name: "userLogin",
	initialState,
	reducers: {
		registerRequest: (state) => {
			state.loading = true;
		},
		registerSuccess: (state, { payload }) => {
			Cookie.set("userInfo", JSON.stringify(payload));
			state.loading = false;
			state.userInfo = payload;
			state.error = "";
		},
		registerFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},

		clearRegister: () => initialState,
	},
});

export const { registerRequest, registerSuccess, registerFailed } =
	registerSlice.actions;
export const registerReducer = registerSlice.reducer;
