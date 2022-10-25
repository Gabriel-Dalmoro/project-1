import mongoose from 'mongoose';

//connecting to MongoDB
await mongoose.connect(
  'mongodb+srv://GabrielDalmoro:project1@cluster0.zskrxmb.mongodb.net/?retryWrites=true&w=majority'
);
// .then(() => console.log('DB is connected.'));

const { Schema, model } = mongoose;

const testSchema = new Schema({
  userName: String,
  x: { type: Number, default: 2 },
  y: { type: Number, default: 2 },
  amountOfKeys: { type: Array, default: [false, false, false] },
});

const User = model('User', testSchema);
export default User;
