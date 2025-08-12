import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import marketsRouter from "./src/markets/router.js";

const app = express();

app.use(express.json());

app.use(cors());
app.use(helmet());

app.use("/", marketsRouter);

const PORT = process.env.port;

const server = app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
