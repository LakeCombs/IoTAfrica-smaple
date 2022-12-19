import { Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrderItemAction } from "../../state/actions/orderItemAction";
import { goToPage, resetPage } from "../../state/slices/checkoutSlice";
import { statesList } from "../../utils/util";

const OrderComponent = () => {
	const { userInfo } = useSelector((state) => state.userLogin);
	const { orderItem } = useSelector((state) => state.orderItem);
	const dispatch = useDispatch();
	const [messageApi, contextHolder] = message.useMessage();
	const [meterNumber, setMeterNumber] = useState(
		orderItem?.meter_number || userInfo?.meter_number || ""
	);
	const [place, setPlace] = useState("");
	const [name, setName] = useState(userInfo?.name || "");
	const [amount, setAmount] = useState("");

	const createOrderItem = () => {
		if (!place) {
			return messageApi.info("State is required");
		}
		if (!meterNumber || !place || !amount) {
			return messageApi.info("All the field are required");
		}
		const orderItem = {
			meter_number: meterNumber,
			state: place,
			amount: amount,
			name: name,
		};
		dispatch(createOrderItemAction(orderItem));
		dispatch(goToPage(1));
	};

	useEffect(() => {
		dispatch(resetPage());
	}, [dispatch]);

	return (
		<div className="flex lg:w-[40%] md:w-[50%] w-[80%] flex-col items-center mt-[30px]">
			{contextHolder}
			<div className="inputDivContainer">
				<label className="p gray-text-primary mt-2 mb-2">Meter Number</label>
				<Input
					required={true}
					value={meterNumber}
					onChange={(e) => {
						setMeterNumber(e.target.value);
					}}
					className="inputStyle"
				/>
			</div>

			<div className="inputDivContainer">
				<label className="p gray-text-primary mt-2 mb-2">State</label>

				<select
					onChange={(e) => setPlace(e.target.value)}
					className="inputStyle border py-1 rounded-lg">
					<option>Enter your state</option>
					{statesList?.map((option, index) => {
						return (
							<option key={index} className="inputStyle">
								{option}
							</option>
						);
					})}
				</select>
			</div>

			<div className="inputDivContainer">
				<label className="p gray-text-primary mt-2 mb-2">
					How much electricity do you want to buy?
				</label>
				<Input
					required={true}
					prefix={"#"}
					placeholder="Enter Amount"
					value={amount}
					onChange={(e) => {
						setAmount(e.target.value);
					}}
					className="inputStyle"
				/>
			</div>

			<div className="inputDivContainer">
				<label className="p gray-text-primary mt-2 mb-2">Name (Optional)</label>
				<Input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					className="inputStyle"
				/>
			</div>

			<button className=" buttonStyle" onClick={createOrderItem}>
				Continue to Payment Information
			</button>
		</div>
	);
};

export default OrderComponent;
