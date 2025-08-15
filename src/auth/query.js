import { pool } from "../config/db.js";

export const createUser = async (email, passwordHash, username) => {
  await pool.query(
    "INSERT INTO users (email, password_hash, name) VALUES ($1, $2, $3)",
    [email, passwordHash, username]
  );
};

export const findUserByEmail = async (email) => {
  console.log("db email", email);
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  console.log("db", result.rows[0]);

  return result.rows[0];
};
