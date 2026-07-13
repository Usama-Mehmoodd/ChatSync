

const mongoose = require("mongoose");


async function connectDB() {

    try {
    const con = await mongoose.connect(
        "mongodb://localhost:27017/messageApp?directConnection=true",
    );

    console.log("Database connected successfully", con.connection.host);

    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
  }
}

module.exports = connectDB;
