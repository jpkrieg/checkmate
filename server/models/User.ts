import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

//--data validators---------------------------------------------------------------------------------
const isPositive: (value: number) => boolean = (value: number) => {
	return value > 0;
}

//--IUser Interface---------------------------------------------------------------------------------
export interface IUser extends mongoose.Document
{
	firstname: string;
	lastname: string;
	email: string;
	username: string;
	passhash: string;
	rating: string;
}

//--UserSchema--------------------------------------------------------------------------------------
const UserSchema = new mongoose.Schema(
	{
		firstname:
		{
			type: String,
			required: true
		},
		lastname:
		{
			type: String,
			required: true
		},
		email:
		{
			type: String,
			required: true,
			unique: true
		},
		username:
		{
			type: String,
			required: true,
			unique: true
		},
		passhash:
		{
			type: String,
			required: true
		},
		rating:
		{
			type: Number,
			default: 1200,
			validate: [isPositive, "negative ratings are not supported"]
		}
	}
)
UserSchema.plugin(uniqueValidator);

export default mongoose.model<IUser>("User", UserSchema);