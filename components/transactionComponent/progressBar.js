import React from "react";
import { useSelector } from "react-redux";

const ProgressBar = () => {
	const { page } = useSelector((state) => state.checkoutScreen);
	return (
		<div className="mb-5 flex flex-wrap w-full  text-white">
			{[
				"1. Order Water-Meter",
				"2. Review Order",
				"3. Payment Information",
				"4. Complete Order",
			].map((step, index) => (
				<div
					key={step}
					className={`flex-1 text-center justify-center p items-center flex ${
						index === page ? "primaryBlueBG  py-2" : "bg-[#7E7E81]  py-3"
					}`}>
					{step}
				</div>
			))}
		</div>
	);
};

export default ProgressBar;
