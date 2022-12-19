import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	clearPaymentMethodAction,
	resetOrderItemAction,
} from "../../state/actions/orderItemAction";
import { clearPaymentAction } from "../../state/actions/paymentAction";
import { resetPage } from "../../state/slices/checkoutSlice";

const CompleteOrderComponent = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const {
		payment: { paymentId },
	} = useSelector((state) => state.createPayment);
	const { orderItem } = useSelector((state) => state.orderItem);
	const { transaction } = useSelector((state) => state.createTransaction);
	const returnHome = () => {
		router.push("/history");
		dispatch(resetOrderItemAction());
		dispatch(clearPaymentMethodAction());
		dispatch(clearPaymentAction());
		dispatch(resetPage());
	};
	return (
		<div className="flex lg:w-[40%] md:w-[50%] w-[80%] flex-col items-center mt-[30px]">
			<div className="w-full flex justify-start">
				<h1 className="align-start ">Transaction Summary</h1>
			</div>

			<div className="flex flex-col justify-center items-center mt-[50px] font-semibold mb-[20px]">
				<p className="p textBlueBG">You’ve Purchased Water!</p>

				<br />
				<p className="p font-normal mt-[10px] mb-[5px]">Token</p>
				<h1 className="font-semibold">{paymentId?.reference}</h1>
			</div>

			<div className="inputDivContainer">
				<label className="p gray-text mt-2 mb-2">Number of Units</label>
				<h1 className="font-semibold">36.12</h1>
			</div>
			<div className="inputDivContainer">
				<label className="p gray-text mt-2 mb-2">Meter Number</label>
				<h1 className="font-semibold">{orderItem?.meter_number}</h1>
			</div>

			<div className="inputDivContainer">
				<label className="p gray-text mt-2 mb-2">Date of Issue</label>
				<h1 className="font-semibold">
					{moment(transaction?.createdAt).format("DD MMMM, YYYY")}
				</h1>
			</div>

			<button className=" buttonStyle" onClick={returnHome}>
				Return Home
			</button>
		</div>
	);
};

export default CompleteOrderComponent;
