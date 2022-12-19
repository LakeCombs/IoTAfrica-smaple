/* eslint-disable react/jsx-key */
import { Input } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import CompleteOrderComponent from "../components/transactionComponent/completeOrderComponent";
import OrderComponent from "../components/transactionComponent/orderComponent";
import PaymentComponent from "../components/transactionComponent/paymentComponent";
import ProgressBar from "../components/transactionComponent/progressBar";
import ReviewOrder from "../components/transactionComponent/reviewOrder";

const Transaction = () => {
	const { page } = useSelector((state) => state.checkoutScreen);
	const pages = [
		<OrderComponent />,
		<ReviewOrder />,
		<PaymentComponent />,
		<CompleteOrderComponent />,
	];

	const Arrow = ({ title, page, value }) => {
		const getColor = () => {
			let style = "";
			if (page === value) {
				style =
					"primaryBlueBG w-full py-4 flex flex-row justify-center items-center p sm:text-[8px] text-[5px]";
			} else {
				style =
					"py-4 flex w-full flex-row justify-center items-center p   bg-[#7E7E81]";
			}
			return style;
		};

		return (
			<div className={getColor()} value={value}>
				{title}
			</div>
		);
	};

	return (
		<Layout title={"transaction"} header={true} footer={true}>
			<div className="flex flex-col w-full justify-center items-center">
				<ProgressBar />

				{pages[page]}
			</div>
		</Layout>
	);
};

export default Transaction;
