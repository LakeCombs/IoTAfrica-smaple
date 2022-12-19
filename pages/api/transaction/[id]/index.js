import nc from "next-connect";
import Transaction from "../../../../models/transaction_model";
import { isAdminMiddleware } from "../../../../utils/auth";
import db from "../../../../utils/db";

const handler = nc();

handler.use(isAdminMiddleware);

handler.get(async (req, res) => {
	await db.connect();
	const tranc = await Transaction.findById(req.query.id);
	await db.disconnect();
	res.status(200).json(tranc);
});

handler.put(async (req, res) => {
	await db.connect();
	const updateTrac = await Transaction.findByIdAndUpdate(
		req.query.id,
		{
			...req.body,
		},
		{ new: true }
	);

	await db.disconnect();
	res.status(200).json(updateTrac);
});

handler.delete(async (req, res) => {
	await db.connect();
	const removing = await Transaction.findByIdAndDelete(req.query.id);
	await db.disconnect();
	res.status(200).json({ message: "Transaction deleted" });
});

export default handler;
