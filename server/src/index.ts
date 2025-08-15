import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { userRoutes } from "./routes/userRoutes";
import { productRoutes } from "./routes/productRoutes";
import { dashboardRoutes } from "./routes/dashboardRoutes";
import { expenseRoutes } from "./routes/expenseRoutes";
// Use a named import here
import { auth } from "../middleware/auth"; 

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/dashboard", auth, dashboardRoutes);
app.use("/api/products", auth, productRoutes);
app.use("/api/expenses", auth, expenseRoutes);

app.use("/api/users", userRoutes);

// This is for Mongoose, but your project uses Prisma. I've commented this out.
// mongoose.connect(process.env.MONGO_URL!)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});