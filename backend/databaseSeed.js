require("dotenv").config();
const databaseData = require("./data/products");
const connectDb = require("./config/db");
const Product = require("./models/Product");

connectDb();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(databaseData);
        console.log("Database seeding: SUCCESSFUL.");

        process.exit();
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}

importData();
