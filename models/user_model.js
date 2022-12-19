import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: [true, "Please a name is required"] },
		email: {
			type: String,
			unique: [true, " Sorry! this email already exist"],
			required: [true, "Email is requried please enter a valid email"],
			match: [
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
				"Please enter a valid email address",
			],
		},
		phone: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			select: false,
		},
		meter_number: {
			type: String,
		},
	},
	{ timestamp: true }
);

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
