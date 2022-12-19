import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
	return (
		<div className="border  sm:px-10 px-[20px] flex flex-row justify-between py-4 items-center absolute top-0 w-full">
			<Image alt="IoTAfrica" src={"/logo.png"} height={"30"} width={"100"} />

			<div className=" md:flex justify-between w-[50%] text-[12px] hidden">
				<Link href={"#"} className="link">
					Buy Meter
				</Link>
				<Link href={"#"} className="link">
					Transaction History
				</Link>
				<Link href={"#"} className="link">
					Contact
				</Link>
				<Link href={"#"} className="link">
					FAQ <span className="pr-3">|</span>
				</Link>
				<span>
					<TiArrowSortedDown />
				</span>
			</div>
			<span className="md:hidden link">
				<AiOutlineMenu />
			</span>
		</div>
	);
};

export default Header;
