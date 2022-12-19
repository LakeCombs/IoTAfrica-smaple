import { Input, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPaymentAction } from "../../state/actions/paymentAction";
import { goToPage } from "../../state/slices/checkoutSlice";
import { usePaystackPayment } from "react-paystack";
import { createPaymentMethodAction } from "../../state/actions/orderItemAction";
import { createTransaction } from "../../state/slices/transactionSlice";
import { createTransactionAction } from "../../state/actions/transactionAction";

const PaymentComponent = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);
	const { orderItem } = useSelector((state) => state.orderItem);
	const { transaction } = useSelector((state) => state.createTransaction);
	const [messageApi, contextHolder] = message.useMessage();
	const [cardNumber, setCardNumber] = useState("");
	const [cardExpires, setCardExpires] = useState("");
	const [cvv, setCvv] = useState("");

	const config = {
		reference: new Date().getTime().toString(),
		email: userInfo?.email,
		amount: orderItem?.amount * 100,
		publicKey: process.env.NEXT_PUBLIC_PAYSTACK,
	};

	const initializePayment = usePaystackPayment(config);

	const setPaymentMethod = () => {
		if (!cardNumber || !cardExpires || !cvv) {
			return messageApi.info("Please enter a valid vard details");
		}

		dispatch(
			createPaymentMethodAction({
				cardNumber,
				cardExpires,
				cvv,
			})
		);

		const onSuccess = (reference) => {
			dispatch(
				createTransactionAction({
					meter_number: orderItem?.meter_number,
					state: orderItem?.state,
					price: orderItem?.amount,
					name: userInfo?._id,
				})
			);

			dispatch(
				createPaymentAction({
					paymentId: reference,
					paymentMethod: "PayStack",
				})
			);
		};

		const onClose = () => {
			messageApi.error(
				"Sorry! an error occoured while trying to pay with paystack, please try again"
			);
		};

		const startPayment = initializePayment(onSuccess, onClose);
	};

	useEffect(() => {
		if (transaction?._id) {
			messageApi.info("transaction created successfully");
			dispatch(goToPage(3));
		}
	}, [dispatch, messageApi, transaction]);

	return (
		<div className="flex lg:w-[50%] md:w-[50%] w-[80%] flex-col items-center mt-[30px]">
			{contextHolder}
			<div className="w-full flex justify-start flex-col">
				<h1 className="align-start font-semibold">Payment</h1>
				<div className="w-full justify-between mt-[20px] flex flex-row">
					<div>
						<p className="text-[13px] gray-text-primary flex flex-row items-center">
							<span className="mr-1">
								<Image
									height={15}
									width={15}
									alt=""
									src={"/credit-card 1creditcard.png"}
								/>{" "}
							</span>
							Pay with Card
						</p>
						<p className="mt-[15px] gray-text-primary p">{userInfo?.email}</p>
					</div>
					<div>
						<p className="text-[13px] gray-text-primary flex flex-row items-end textBlueBG">
							Change
						</p>
						<p className="mt-[15px] gray-text-primary p textBlueBG">
							Pay NGN {orderItem?.amount}
						</p>
					</div>
				</div>
				<div className="w-full flex justify-center items-center mt-[30px] mb-[30px]">
					<p className="p font-semibold">Enter your card details to pay</p>
				</div>

				<div className="inputDivContainer mr-1">
					<label className="text-[12px] gray-text mt-2 mb-2">Card Number</label>
					<Input
						placeholder="0000 0000 0000 0000"
						value={cardNumber}
						onChange={(e) => {
							setCardNumber(e.target.value);
						}}
						className="inputStyle"
					/>
				</div>
				<div className="flex flex-row justify-between">
					<div className="inputDivContainer mr-1">
						<label className="text-[12px] gray-text mt-2 mb-2">
							Card Expire
						</label>
						<Input
							placeholder="MM / YY"
							value={cardExpires}
							onChange={(e) => {
								setCardExpires(e.target.value);
							}}
							className="inputStyle"
						/>
					</div>

					<div className="inputDivContainer ml-1">
						<label className="text-[12px] gray-text mt-2 mb-2">CVV</label>
						<Input
							placeholder="123"
							value={cvv}
							onChange={(e) => {
								setCvv(e.target.value);
							}}
							className="inputStyle"
						/>
					</div>
				</div>

				<button className="buttonStyle" onClick={setPaymentMethod}>
					Pay NGN{orderItem?.amount}
				</button>

				<div className="mt-[30px] mb-[40px] w-full flex sm:flex-row flex-col justify-between items-center">
					<Link
						href={"#"}
						passHref
						className="p sm:w-[200px] w-full sm:mb-0 mb-[20px] py-2 bg-[#ECF7FD] flex justify-center items-center mr-2 hover:cursor-pointer">
						Change Payment Method
					</Link>

					<Link
						href={"#"}
						passHref
						className="p w-[200px] py-2 bg-[#ECF7FD] flex justify-center items-center ml-2 hover:cursor-pointer">
						Cancel Payment
					</Link>
				</div>
				<div className="mb-[20px] flex w-full justify-center">
					<p className="p">
						Secured by <span className="font-extrabold">paystack</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default PaymentComponent;
