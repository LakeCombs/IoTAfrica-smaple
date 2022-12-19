import { clearPayment, createPayment } from "../slices/paymentSlice";

export const createPaymentAction = (pay) => (dispatch) => {
	dispatch(createPayment(pay));
};

export const clearPaymentAction = () => (dispatch) => {
	dispatch(clearPayment());
};
