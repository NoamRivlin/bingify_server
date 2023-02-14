const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.mongo_uri);
    console.log(`DB connected ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
