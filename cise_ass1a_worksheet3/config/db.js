const config = require('config');
const mongoose = require('mongoose');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error('Error:'+ err.message);
    process.exit(1);
  }
};

module.exports = connectDB;