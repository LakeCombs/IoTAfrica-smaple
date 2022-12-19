import nc from "next-connect";
import { signToken } from "../../../utils/auth";
import db from "../../../utils/db";
import bcrypt from "bcryptjs";
import User from "../../../models/user_model";

const handler = nc();

handler.post(async (req, res) => {
	try {
		await db.connect();
		const password = bcrypt.hashSync(req.body.password, 10);
		const newUser = await User.create({ ...req.body, password });
		await db.disconnect();
		const token = signToken(newUser);
		res.status(200).json({
			...newUser?._doc,
			user_token: token,
		});
	} catch (error) {
		console.log("eror", error);
		res.status(500).json({
			message: error?.message | error,
		});
	}
});

export default handler;
