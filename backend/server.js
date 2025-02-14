import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

/**********************************
 ********** App Config ************
 ********************************** */
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

/**********************************
 ********** Middlewares ***********
 ********************************** */
// Use the JSON parser middleware to automatically parse JSON requests
app.use(express.json());
// Acess Backend from any IP
app.use(cors());

/**********************************
 ********* API Endpoints **********
 ********************************** */
// Mount the userRouter at the '/api/user' path, so all routes defined in userRouter will be prefixed with '/api/user'
// Mount the productRouter at the '/api/product' path, so all routes defined in productRouter will be prefixed with '/api/product'
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
// Define the root endpoint '/' which responds with a simple message to indicate that the API is working
app.get("/", (req, res) => {
  res.send("API is Working");
});
// Start the Express server and listen on the defined port
app.listen(port, () => {
  console.log(`Server started on PORT : ${port}`);
});
