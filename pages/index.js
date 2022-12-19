/* eslint-disable react/no-unescaped-entities */
import { Alert, Input, Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillExclamationCircle, AiOutlineMail } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { loginUser } from "../state/actions/userAction";
import { RiLockPasswordLine } from "react-icons/ri";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default function Home() {
	const router = useRouter();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { userInfo, loading, error } = useSelector((state) => state.userLogin);

	const submitLogin = (e) => {
		e.preventDefault();
		dispatch(loginUser({ email, password }));
	};

	useEffect(() => {
		if (userInfo?._id) router.push("/history");
	}, [router, userInfo]);

	return (
		<Layout title={"login"}>
			<div className="w-full flex pt-[30px]  justify-center items-center ">
				<div className="flex lg:w-[30%] md:w-[50%] sm:w-[60%] w-[70%] flex-col items-center mt-[30px] ">
					<Image width="170" height="50" alt="iotAfrica" src={"/logo.png"} />
					<p className="text-[13px] mt-[5px] gray-text">
						Please enter your credentials to login.
					</p>

					<form className="mt-[20px] w-full" onSubmit={submitLogin}>
						{error && (
							<Alert type="error" message={error} showIcon className="p" />
						)}

						<div className="flex flex-col">
							<label className="text-[12px] gray-text mt-2 mb-2">EMAIL</label>
							<Input
								prefix={<AiOutlineMail />}
								required
								type="email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								className="inputStyle"
							/>
						</div>

						<div className="flex flex-col mt-3">
							<label className="text-[12px] gray-text mt-2 mb-2 flex w-full justify-between">
								<span>PASSWORD</span> <span>Forget password</span>
							</label>
							<Input.Password
								prefix={<RiLockPasswordLine />}
								type="password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								className="inputStyle"
							/>
						</div>

						<button
							className="buttonStyle"
							onClick={submitLogin}
							disabled={loading}>
							{loading ? <Spin /> : "Sign in"}
						</button>
						<p className="text-[12px] mt-4 flex justify-center">
							<span className="gray-text">Don't have an account?</span>
							<span className="ml-2 textBlueBG">
								<Link href={"/register"}>Register</Link>
							</span>
						</p>
					</form>
				</div>
			</div>
		</Layout>
	);
}
