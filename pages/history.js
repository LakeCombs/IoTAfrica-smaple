import React from "react";
import HistoryOption from "../components/historyOption";
import Layout from "../components/Layout";
import { FaUserAlt } from "react-icons/fa";
import { RiKey2Fill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";
import { Input } from "antd";
import db from "../utils/db";
import Transaction from "../models/transaction_model";
import { useRouter } from "next/router";
import moment from "moment";

export default function History(props) {
	const { transactions } = props;

	const router = useRouter();
	return (
		<Layout header={true} title="history">
			<div className="w-full flex flex-row mt-[20px]  md:px-[50px] px-[20px] items-start">
				<div className="mr-10 w-[25%] hidden md:block">
					<HistoryOption name={"Quick Purchase"} icon={<FaUserAlt />} />
					<HistoryOption
						name={"Transaction"}
						icon={<RiKey2Fill />}
						onClick={() => router.push("/transaction")}
					/>
					<HistoryOption name={"Contact Us"} icon={<MdContactMail />} />
					<HistoryOption name={"My Meters"} icon={<FaUserAlt />} />
					<HistoryOption name={"Virtual Acconts"} icon={<FaUserAlt />} />
					<HistoryOption name={"My Cards"} icon={<FaUserAlt />} />
					<HistoryOption name={"Request Utility Bill"} icon={<FaUserAlt />} />
					<HistoryOption name={"View Profile"} icon={<FaUserAlt />} />
				</div>
				<div className="w-[100%]">
					<div className="w-full flex md:flex-row md:justify-between md:items-center flex-col-reverse justify-start items-start">
						<h1 className="font-semibold md:text-[20px] md:mt-0 mt-[10px] text-[15px]">
							Transaction
						</h1>

						<form className="flex flex-row">
							<Input
								placeholder="Search Transaction"
								className="border  rounded-lg outline-none px-2 bg-transparent sm:text-[14px] text-[12px]"
							/>
							<button className="primaryBlueBG  ml-[5px] flex flex-row px-3 md:py-3 py-1 rounded-lg text-white items-center font-semibold text-[13px]">
								<span className="mr-2 font-semibold sm:text-[15px] text-[12px]">
									<VscSearch />
								</span>
								Search
							</button>
						</form>
					</div>

					<table className="w-full table-auto md:mt-[20px] mt-[10px]">
						<thead className="border-b-2 ">
							<tr className=" p text-[#054C73] mb-[10px]">
								<td>Date</td>
								<td>Order No</td>
								<td>Customer ID</td>
								<td>Amount</td>
							</tr>
						</thead>
						{transactions?.length ? (
							<tbody className="mt-[20px]">
								{transactions?.map((tran) => {
									return (
										<tr className=" py-3 p" key={tran?._id}>
											<td>{moment(tran?.createdAt).format("DD MMMM, YYYY")}</td>
											<td>{tran?._id}</td>
											<td>{tran?.name?.name}</td>
											<td>#{tran?.price}</td>
										</tr>
									);
								})}
							</tbody>
						) : (
							<div>
								<h1 className="mt-[20px] md:text-[16px] text-[13px]  font-semibold">
									No Transaction
								</h1>
							</div>
						)}
					</table>
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps() {
	await db.connect();
	const transactions = await Transaction.find({}).populate("name").lean();
	await db.disconnect();
	return {
		props: {
			transactions: JSON.parse(JSON.stringify(transactions)),
		},
	};
}
