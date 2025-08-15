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

(async () => {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY ,
      email TEXT unique NOT NULL,
      password_hash TEXT NOT NULL,
      name TEXT not null);`);
    console.log("User table ready");
  } catch (error) {
    console.error("Error creating users table", error);
  }
})();
