import { createSlice } from "@reduxjs/toolkit";

const getAllTransactionSlice = createSlice({
	name: "get all transaction",
	initialState: {
		data: [],
		loading: false,
		error: "",
	},
	reducers: {
		getAllTransactionRequest: (state) => {
			state.loading = true;
		},
		getAllTransactionSuccess: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
		},
		getAllTransactionFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export const {
	getAllTransactionRequest,
	getAllTransactionSuccess,
	getAllTransactionFailed,
} = getAllTransactionSlice.actions;
export const allTransactionReducer = getAllTransactionSlice.reducer;

const getTransactionByIdSlice = createSlice({
	name: "get transaction by id",
	initialState: {
		data: [],
		loading: false,
		error: "",
	},
	reducers: {
		getTransactionByIdRequest: (state) => {
			state.loading = true;
		},
		getTransactionByIdSuccess: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
		},
		getTransactionByIdFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export const {
	getTransactionByIdRequest,
	getTransactionByIdSuccess,
	getTransactionByIdFailed,
} = getTransactionByIdSlice.actions;
export const transactionByIdReducer = getTransactionByIdSlice.reducer;

const createTransactionSlice = createSlice({
	name: "create a transaction",
	initialState: {
		transaction: {},
		loading: false,
		error: "",
	},
	reducers: {
		createTransactionRequest: (state) => {
			state.loading = true;
		},
		createTransactionSuccss: (state, { payload }) => {
			state.loading = false;
			state.transaction = payload;
		},
		createTransactionFailed: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export const {
	createTransactionRequest,
	createTransactionSuccss,
	createTransactionFailed,
} = createTransactionSlice.actions;
export const createTransaction = createTransactionSlice.reducer;
