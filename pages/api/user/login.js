import nc from "next-connect";
import User from "../../../models/user_model";
import db from "../../../utils/db";
import bcrypt from "bcryptjs";
import { signToken } from "../../../utils/auth";

const handler = nc();

handler.post(async (req, res) => {
	await db.connect();
	const user = await User.findOne({ email: req.body.email }).select("password");

	if (!user) {
		return res.status(404).json({
			message: "Sorry! you are not register with us, register and try again ",
		});
	}
	const verifyPassword = await bcrypt.compareSync(
		req.body.password,
		user?.password
	);
	if (user && verifyPassword) {
		const verifiedUser = await User.findOne({ email: req.body.email });
		await db.disconnect();

		res.send({
			user_token: signToken(verifiedUser),
			...verifiedUser?._doc,
		});
	} else {
		res.json({ message: "Invalid email or password" });
	}
});

export default handler;
