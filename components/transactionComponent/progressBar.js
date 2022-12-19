import React from "react";

const ProgressBar = () => {
	return (
		<div className="container">
			<div className="wrapper">
				<div className="arrow-steps clearfix">
					<div className="step current">
						{" "}
						<span> Step 1</span>{" "}
					</div>
					<div className="step">
						{" "}
						<span>Step 2 some words</span>{" "}
					</div>
					<div className="step">
						{" "}
						<span> Step 3</span>{" "}
					</div>
					<div className="step">
						{" "}
						<span>Step 4</span>{" "}
					</div>
				</div>
				<div className="nav clearfix">
					<a href="#" className="prev">
						Previous
					</a>
					<a href="#" className="next pull-right">
						Next
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;
