import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
// import Users from "./models/UserModel.js";
import cors from "cors";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

try {
	await db.authenticate();
	console.log("Database Connected...");
	// await Users.sync();
} catch (error) {
	console.log(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));
