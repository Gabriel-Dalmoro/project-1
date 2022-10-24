import mongoose from 'mongoose';

//connecting to MongoDB
await mongoose.connect(
  'mongodb+srv://GabrielDalmoro:project1@cluster0.zskrxmb.mongodb.net/?retryWrites=true&w=majority'
);
// .then(() => console.log('DB is connected.'));

const { Schema, model } = mongoose;

const testSchema = new Schema({
  userName: String,
  updatedX: { type: Number, default: 2 },
  updatedY: { type: Number, default: 2 },
  ammountOfKeys: { type: Array, default: [false, false, false] },
});

const User = model('User', testSchema);
export default User;
