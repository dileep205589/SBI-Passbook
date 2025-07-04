const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL)
    // await mongoose.connect("mongodb+srv://dileep:T4GWdPeN4nKd8WKf@cluster0.0omo76x.mongodb.net/passbook")
  .then(() => console.log("  MongoDB Connected!"))
  .catch((err) => console.error("Error:", err.message));

  
};
module.exports = connectDB;
