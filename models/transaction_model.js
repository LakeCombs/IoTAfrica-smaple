import mongoose from "mongoose";
import User from "./user_model";

const transactionSchema = new mongoose.Schema(
	{
		meter_number: {
			type: Number,
			required: [true, "Please enter a valid meter number"],
		},
		state: {
			type: String,
			required: [true, "Tell us the state you are buying from "],
		},
		price: {
			type: Number,
			required: [true, "Please enter the amount you want to buy for "],
		},
		name: {
			type: mongoose.Schema.Types.ObjectId,
			ref: User,
		},
	},
	{ timestamps: true }
);

const transactionModel =
	mongoose.models.Transaction ||
	mongoose.model("Transaction", transactionSchema);

export default transactionModel;
