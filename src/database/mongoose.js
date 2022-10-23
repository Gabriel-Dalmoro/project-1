import mongoose from 'mongoose';

main().catch((err) => console.error(err));

async function main() {
  await mongoose.connect(
    'mongodb+srv://GabrielDalmoro:project1@cluster0.zskrxmb.mongodb.net/?retryWrites=true&w=majority'
  );
  const testSchema = new mongoose.Schema({
    name: String,
  });
  const Dog = mongoose.model('Dog', testSchema);
  const maple = new Dog({ name: 'Maple' });
  console.log(maple.name);
  testSchema.methods.speak = function speak() {
    const greeting = this.name
      ? 'My name is ' + this.name
      : 'I dont have a name';
    console.log(greeting);
  };
  const cookie = new Dog({ name: 'Cookie' });
  cookie.speak();
}
