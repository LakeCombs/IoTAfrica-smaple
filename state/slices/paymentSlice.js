import { createSlice } from "@reduxjs/toolkit";

const createPaymentSlice = createSlice({
	name: "create payment slice",
	initialState: {
		payment: {
			paymentId: "",
			paymentMethod: "",
		},
	},
	reducers: {
		createPayment: (state, { payload }) => {
			state.payment.paymentId = payload.paymentId;
			state.payment.paymentMethod = payload.paymentMethod;
		},

		clearPayment: (state) => {
			state.payment = {
				paymentId: "",
				paymentMethod: "",
			};
		},
	},
});

export const { createPayment, clearPayment } = createPaymentSlice.actions;
export const createPaymentReducer = createPaymentSlice.reducer;
