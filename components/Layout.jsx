/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({
	title,
	description,
	children,
	footer,
	header,
}) {
	return (
		<div>
			<Head>
				<title>{title ? `${title} - IoTAfrica` : "IoTAfrica"}</title>
				{description && <meta name="description" content={description} />}
			</Head>
			{header ? <Header /> : <></>}

			<div className="w-full  min-h-screen pt-[65px] pb-[65px] bg">
				{children}
			</div>
			<footer>{footer ? <Footer /> : <></>}</footer>
		</div>
	);
}
