import mongoose from "mongoose";

// see specification here: http://www.saremba.de/chessgml/standards/pgn/pgn-complete.htm#c8.1

export interface IPGN extends mongoose.Document {
	raw: string;

	// required tags
	event: string;	// [Event "*******"]
	site: string;	// [Site "*******"]
	date: string;	// [Date "*******"]
	round: string;	// [Round "*******"]
	white: string;	// [White "*******"]
	black: string;	// [Black "*******"]
	result: string;	// [Result "*******"]

	// optional tags
	

	// movetext
	movetext: string; // TODO for now I'l just have this be a string but in the future I should
					  // create a class for this to capture all of the weird intricacies
}

const PGNSchema = new mongoose.Schema(
	{
		raw:
		{
			type: String,
			required: true
		},
		event:
		{
			type: String,
			required: true
		},
		site:
		{
			type: String,
			required: true
		},
		date:
		{
			type: String,
			required: true
		},
		round:
		{
			type: String,
			required: true
		},
		white:
		{
			type: String,
			required: true
		},
		black:
		{
			type: String,
			required: true
		},
		result:
		{
			type: String,
			required: true
		},
		movetext:
		{
			type: String,
			required: true
		}
	}
)

export default mongoose.model<IPGN>("PGN", PGNSchema);