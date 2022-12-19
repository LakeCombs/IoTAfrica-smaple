import { Alert, Input, Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine, RiProfileFill } from "react-icons/ri";
import Layout from "../components/Layout";
import { BsSpeedometer2, BsTelephone } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../state/actions/userAction";
import { useRouter } from "next/router";

const Register = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [meterNumber, setMeterNumber] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const { userInfo } = useSelector((state) => state.userLogin);
	const { loading, error } = useSelector((state) => state.signup);
	const submitRegister = (e) => {
		e.preventDefault();
		dispatch(
			registerUser({
				name,
				email,
				meter_number: meterNumber,
				phone,
				password,
			})
		);
	};

	useEffect(() => {
		if (userInfo?._id) {
			router.push("/history");
		}
	}, [router, userInfo]);

	return (
		<Layout title={"register"}>
			<div className="w-full h-full flex justify-center items-center ">
				<div className="flex lg:w-[30%] md:w-[50%] sm:w-[60%] w-[70%] flex-col items-center">
					<Image width="170" height="50" alt="iotAfrica" src={"/logo.png"} />
					<p className="text-[13px] mt-[5px] gray-text">
						Please enter the required credentials.
					</p>

					<form className="mt-[20px] w-full" onSubmit={submitRegister}>
						{error && <Alert type="error" message={error} showIcon />}
						<div className="flex flex-col">
							<label className="text-[12px] gray-text mt-2 mb-2">
								USERNAME
							</label>
							<Input
								required
								prefix={<AiOutlineUser />}
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
								className="InputBoxBG"
							/>
						</div>

						<div className="flex flex-col">
							<label className="text-[12px] gray-text mt-2 mb-2">EMAIL</label>
							<Input
								required
								prefix={<AiOutlineMail />}
								value={email}
								type="email"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								className="InputBoxBG"
							/>
						</div>

						<div className="flex flex-col">
							<label className="text-[12px] gray-text mt-2 mb-2">
								METER NUMBER
							</label>
							<Input
								required
								prefix={<BsSpeedometer2 />}
								value={meterNumber}
								type="email"
								onChange={(e) => {
									setMeterNumber(e.target.value);
								}}
								className="InputBoxBG"
							/>
						</div>

						<div className="flex flex-col">
							<label className="text-[12px] gray-text mt-2 mb-2">
								PHONE NUMBER
							</label>
							<Input
								required
								type="number"
								prefix={<BsTelephone />}
								value={phone}
								onChange={(e) => {
									setPhone(e.target.value);
								}}
								className="InputBoxBG"
							/>
						</div>

						<div className="flex flex-col mt-3">
							<label className="text-[12px] gray-text mt-2 mb-2 flex w-full justify-between">
								PASSWORD
							</label>
							<Input.Password
								required
								prefix={<RiLockPasswordLine />}
								type="password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								className="InputBoxBG"
							/>
						</div>

						<button className="buttonStyle" onClick={submitRegister}>
							{loading ? <Spin /> : "Register"}
						</button>
						<p className="text-[12px] mt-4 flex justify-center">
							<span className="gray-text">Already have an account?</span>
							<span className="ml-2 textBlueBG">
								<Link href={"/"}>Login</Link>
							</span>
						</p>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default Register;
