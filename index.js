import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());
app.use(helmet());

const PORT = process.env.port;

const server = app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
