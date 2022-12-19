import { createSlice } from "@reduxjs/toolkit";

const checkoutScreenSlice = createSlice({
	name: "check out screen state",
	initialState: {
		page: 0,
	},
	reducers: {
		goToPage: (state, { payload }) => {
			state.page = payload;
		},
		resetPage: (state) => {
			state.page = 0;
		},
	},
});

export const { goToPage, resetPage } = checkoutScreenSlice.actions;
export const checkoutScreen = checkoutScreenSlice.reducer;
