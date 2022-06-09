import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const schema = new Schema(
	{
		name: String,
		email: String,
		age: Number,
	},
	{
		versionKey: false,
	}
);

export default model('User', schema, 'users');
