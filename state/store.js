import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { registerReducer, userLogin } from "./slices/userSlice";
import {
	allTransactionReducer,
	createTransaction,
	transactionByIdReducer,
} from "./slices/transactionSlice";
import { checkoutScreen } from "./slices/checkoutSlice";
import { orderItemReducer } from "./slices/orderItemSlice";
import { createPaymentReducer } from "./slices/paymentSlice";

const middleware = [thunk, logger];

const reducer = combineReducers({
	userLogin: userLogin,
	signup: registerReducer,

	allTransactions: allTransactionReducer,
	transactionById: transactionByIdReducer,
	createTransaction: createTransaction,

	orderItem: orderItemReducer,
	createPayment: createPaymentReducer,

	checkoutScreen: checkoutScreen,
});

const store = configureStore({
	reducer,
	middleware,
});

export default store;
