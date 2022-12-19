import { createSlice } from "@reduxjs/toolkit";

const orderItemSlice = createSlice({
	name: "create order items",
	initialState: {
		orderItem: {},
		paymentMethod: {
			cardNumber: "",
			cardExpires: "",
			cvv: "",
			method: "card",
		},
	},
	reducers: {
		createOrderItem: (state, { payload }) => {
			state.orderItem = payload;
		},
		updateOrderItem: (state, { payload }) => {
			state.orderItem = payload;
		},
		resetOrderItem: (state) => {
			state.orderItem = {};
		},
		createPaymentMethod: (state, { payload }) => {
			state.paymentMethod = payload;
		},
		updatePaymentMethod: (state, { payload }) => {
			state.paymentMethod = { ...payload };
		},
		clearPaymentMethod: (state) => {
			state.paymentMethod = {
				cardNumber: "",
				cardExpires: "",
				cvv: "",
				method: "card",
			};
		},
	},
});

export const {
	createOrderItem,
	updateOrderItem,
	resetOrderItem,
	createPaymentMethod,
	updatePaymentMethod,
	clearPaymentMethod,
} = orderItemSlice.actions;
export const orderItemReducer = orderItemSlice.reducer;
