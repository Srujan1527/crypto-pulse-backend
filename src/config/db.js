import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
import { DATABASE } from "./env.js";
const { Pool } = pkg;

export const pool = new Pool({
  user: DATABASE.USER,
  host: DATABASE.HOST,
  database: DATABASE.DATABASE,
  password: DATABASE.PASSWORD,
  port: DATABASE.PORT,
});
