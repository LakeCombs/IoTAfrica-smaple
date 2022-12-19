import nc from "next-connect";
import Transaction from "../../../models/transaction_model";
import { isAuthMiddleware } from "../../../utils/auth";
import db from "../../../utils/db";

const handler = nc();

handler.use(isAuthMiddleware);

handler.post(async (req, res) => {
	await db.connect();
	const createTrans = await Transaction.create({ ...req.body });
	await db.disconnect();

	res.status(200).json(createTrans);
});

handler.get(async (req, res) => {
	await db.connect();
	const getAll = await Transaction.find({});
	await db.disconnect();
	res.status(200).json(getAll);
});

export default handler;
