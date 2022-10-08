import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";

dotenv.config();

const checkUser = async (req, res, next) => {
  if (req.cookies.jwtToken == null)
    return res
      .status(400)
      .json({ status: "error", error: "No jwtToken in cookies." });
  let cookie;
  try {
    cookie = jsonwebtoken.verify(req.cookies.jwtToken, process.env.JWT_SECRET);
    if (!(await User.exists({ _id: cookie.id })))
      return res
        .status(400)
        .json({ status: "error", error: "User not found." });
  } catch (err) {
    return res
      .status(400)
      .json({ status: "error", error: "Invalid jwtToken in cookies." });
  }

  req.checkData = cookie;
  next();
};

export default checkUser;
