import { goToPage, resetPage } from "../slices/checkoutSlice";

export const goToPageAction = (page) => (dispatch) => {
	dispatch(goToPage(page));
};

export const resetPageAction = (page) => (dispatch) => {
	dispatch(resetPage(0));
};
