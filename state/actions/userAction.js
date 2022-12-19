import {
	loginFailed,
	loginRequest,
	loginSuccess,
	registerFailed,
	registerRequest,
	registerSuccess,
} from "../slices/userSlice";
import axios from "axios";
import { getError } from "../../utils/util";

export const loginUser =
	({ email, password }) =>
	async (dispatch) => {
		dispatch(loginRequest());
		try {
			const { data } = await axios.post("/api/user/login", { email, password });
			dispatch(loginSuccess(data));
		} catch (error) {
			dispatch(loginFailed(getError(error)));
		}
	};

export const registerUser = (input) => async (dispatch) => {
	dispatch(registerRequest());
	try {
		const { data } = await axios.post("/api/user/register", { ...input });
		dispatch(loginSuccess(data));
		dispatch(registerSuccess(data));
	} catch (error) {
		dispatch(registerFailed(error?.response?.data?.message || error?.message));
	}
};
