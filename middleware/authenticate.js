import { compare } from "bcrypt";
import { getUserDb } from "../model/usersDb.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const authenticateUser = async (req, res, next) => {
  const { emailAdd, userPass } = req.body;
  const user = await getUserDb(emailAdd);

  if (!user) {
    res.status(401).json({ message: "User not found" });
    return;
  }

  const hashedPassword = user.userPass;
  const isValidPassword = await compare(userPass, hashedPassword);

  if (!isValidPassword) {
    res.status(401).json({ message: "Password is incorrect" });
    return;
  }

  const token = jwt.sign({ emailAdd: user.emailAdd }, process.env.SECRET_KEY, { expiresIn: '1h' });
  res.cookie('authToken', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
  req.body.token = token;
  next();
};

const verifyToken = (req, res, next) => {
  const token = req.cookies.authToken || req.headers['x-access-token'];
  if (!token) {
    res.status(401).json({ message: "Token is missing" });
    return;
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: "Token is invalid" });
      return;
    }

    req.body.emailAdd = decoded.emailAdd;
    next();
  });
};

export { authenticateUser, verifyToken };