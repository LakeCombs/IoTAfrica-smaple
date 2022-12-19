import {
	clearPaymentMethod,
	createOrderItem,
	createPaymentMethod,
	resetOrderItem,
	updateOrderItem,
	updatePaymentMethod,
} from "../slices/orderItemSlice";

export const createOrderItemAction = (item) => (dispatch) => {
	dispatch(createOrderItem(item));
};

export const updateOrderItemAction = (item) => (dispatch) => {
	dispatch(updateOrderItem(item));
};

export const resetOrderItemAction = () => (dispatch) => {
	dispatch(resetOrderItem());
};

export const createPaymentMethodAction = (item) => (dispatch) => {
	dispatch(createPaymentMethod(item));
};

export const updatePaymentMethodAction = (item) => (dispatch) => {
	dispatch(updatePaymentMethod(item));
};

export const clearPaymentMethodAction = () => (dispatch) => {
	dispatch(clearPaymentMethod());
};
