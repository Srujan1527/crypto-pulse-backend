import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/env";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "UnAuthorized" });
  }

  const token = authHeader.spilt(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
