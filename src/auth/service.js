import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { findUserByEmail, createUser } from "./query.js";
import { JWT_SECRET_KEY } from "../config/env.js";

export const signUpService = async (email, password, username) => {
  try {
    // console.log("service", email, password, username);
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return { status: 400, data: { message: "User already exists" } };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log("hashed password", hashedPassword);

    await createUser(email, hashedPassword, username);

    return { status: 201, data: { message: "User created Successfully" } };
  } catch (error) {
    throw error;
  }
};

export const loginService = async (email, password) => {
  try {
    const user = await findUserByEmail(email);
    console.log("user", user);
    if (!user) {
      return { status: 404, data: { message: "Invalid email or password" } };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    console.log("passwordHashed", isPasswordValid);
    console.log("SECRET_KEY", JWT_SECRET_KEY);

    if (!isPasswordValid) {
      return { status: 400, data: { message: "Invalid email or password" } };
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      JWT_SECRET_KEY.SECRET_KEY,
      { expiresIn: "1h" }
    );
    console.log("token", token);
    return {
      status: 200,
      data: { username: user.name, email: user.email, token },
    };
  } catch (error) {
    console.error("Login error:", error);
    return { status: 500, data: { message: "Error " } };
  }
};
