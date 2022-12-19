import axios from "axios";
import { getError } from "../../utils/util";
import {
	createTransactionFailed,
	createTransactionRequest,
	createTransactionSuccss,
	getAllTransactionFailed,
	getAllTransactionRequest,
	getAllTransactionSuccess,
	getTransactionByIdFailed,
	getTransactionByIdRequest,
} from "../slices/transactionSlice";

export const getAllTransactionAction = () => async (dipatch) => {
	dispatch(getAllTransactionRequest());
	try {
		const { data } = await axios.get("/api/transaction");
		dispatch(getAllTransactionSuccess(data));
	} catch (error) {
		dispatch(getAllTransactionFailed(getError(error)));
	}
};

export const createTransactionAction =
	(transac) => async (dispatch, getState) => {
		dispatch(createTransactionRequest());
		try {
			const {
				userLogin: { userInfo },
			} = getState();
			console.log("the input is ", transac);
			const { data } = await axios.post(
				"/api/transaction",
				{ ...transac },
				{
					headers: {
						Authorization: `Bearer ${userInfo?.user_token}`,
					},
				}
			);

			console.log("the data from here is ", data);

			dispatch(createTransactionSuccss(data));
		} catch (error) {
			dispatch(createTransactionFailed(getError(error)));
		}
	};

export const getTransactionByIdAction = (id) => async (dispatch) => {
	dispatch(getTransactionByIdRequest());
	try {
		const { data } = await axios.get(
			`/api/transaction/${id}`,
			{},
			{
				headers: {
					Authorization: `Bearer ${userInfo?.user_token}`,
				},
			}
		);
	} catch (error) {
		dispatch(getTransactionByIdFailed(getError(error)));
	}
};
