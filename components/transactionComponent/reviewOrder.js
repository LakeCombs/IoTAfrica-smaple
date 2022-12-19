import { Input, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderItemAction } from "../../state/actions/orderItemAction";
import { goToPage } from "../../state/slices/checkoutSlice";

const ReviewOrder = () => {
	const dispatch = useDispatch();
	const [messageApi, contextHolder] = message.useMessage();
	const { userInfo } = useSelector((state) => state.userLogin);
	const { orderItem } = useSelector((state) => state.orderItem);
	const [meterNumber, setMeterNumber] = useState(userInfo?.meter_number || "");
	const [name, setName] = useState(orderItem?.name || "");
	const [phone, setPhone] = useState(userInfo?.phone);
	const [amount, setAmount] = useState(orderItem?.amount || "");

	const submitReviewOrder = () => {
		if (!meterNumber || !amount || !name || !phone) {
			return messageApi.info("All the field are required");
		}
		dispatch(
			updateOrderItemAction({
				meter_number: meterNumber,
				state: orderItem?.state,
				amount: amount,
				name: name,
				phone: phone,
			})
		);
		dispatch(goToPage(2));
	};
	return (
		<div className="flex lg:w-[40%] md:w-[50%] w-[80%] flex-col items-center mt-[30px]">
			{contextHolder}
			<div className="w-full flex justify-start">
				<h1 className="align-start ">Review Your Order</h1>
			</div>
			<div className="inputDivContainer">
				<label className="p gray-text mt-2 mb-2">Meter Number</label>
				<Input
					value={meterNumber}
					onChange={(e) => {
						setMeterNumber(e.target.value);
					}}
					className="inputStyle"
				/>
			</div>

			<div className="inputDivContainer">
				<label className="p gray-text mt-2 mb-2">Name</label>
				<Input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					className="inputStyle"
				/>
			</div>

			<div className="inputDivContainer">
				<label className="p gray-text mt-2 mb-2">Phone Number</label>
				<Input
					value={phone}
					onChange={(e) => {
						setPhone(e.target.value);
					}}
					className="inputStyle"
				/>
			</div>
			<div className="inputDivContainer">
				<label className="p gray-text mt-2 mb-2">Amount</label>
				<Input
					value={amount}
					onChange={(e) => {
						setAmount(e.target.value);
					}}
					className="inputStyle"
				/>
			</div>

			<button className=" buttonStyle" onClick={submitReviewOrder}>
				Pay #{amount}
			</button>
		</div>
	);
};

export default ReviewOrder;
