import { signUpService, loginService } from "./service.js";

export const signUp = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    // console.log(req.body);
    const result = await signUpService(email, password, username);

    return res.status(result.status).json(result.data);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    const result = await loginService(email, password);
    console.log("result", result.data);
    return res.status(result.status).json(result.data);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
