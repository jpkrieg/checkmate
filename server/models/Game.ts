import mongoose from "mongoose";
import { IUser } from "./User";
import { IPGN } from "./PGN";

export interface IGame extends mongoose.Document {
	white: IUser["_id"];
	black: IUser["_id"];
	pgn: IPGN["_id"];
}

const GameSchema = new mongoose.Schema(
	{
		white: {
			type: mongoose.Schema.Types.ObjectId,
			required: true
		},
		black: {
			type: mongoose.Schema.Types.ObjectId,
			required: true
		},
		pgn: {
			type: mongoose.Schema.Types.ObjectId,
			required: true
		},
	}
)

export default mongoose.model<IGame>("Game", GameSchema);