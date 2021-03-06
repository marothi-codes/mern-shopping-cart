require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("The MONGODB connection is successful.");
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
}

module.exports = connectDb;
