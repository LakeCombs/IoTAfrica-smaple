import React from "react";

const HistoryOption = ({ icon, name, onClick }) => {
	return (
		<div
			className="w-full px-[7px] text-[12px] py-5 text-[#18191F] flex flex-row items-center  h-[10px] hover:bg-[#DFE9F4] active:bg-[#DFE9F4] mb-3s"
			onClick={onClick}>
			<span>{icon}</span>
			<div className="ml-[10px]">{name}</div>
		</div>
	);
};

export default HistoryOption;
