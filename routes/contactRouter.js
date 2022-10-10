import User from "../models/user.js";
import express from "express";
import cookieParser from "cookie-parser";
import checkUser from "../middlewares/checkUser.js";

const contactRouter = new express.Router();
contactRouter.use(express.json());
contactRouter.use(cookieParser());

contactRouter.post("/new", checkUser, async (req, res) => {
  if ((!req.body?.phone && !req.body?.email) || !req.body.name)
    return res
      .status(400)
      .json("Name and either mail or phone must be provided.");

  const user = await User.findById(req.checkData.id);
  let contact = {};
  contact.name = req.body.name;
  if (req.body.email) contact.email = req.body.email;
  if (req.body.phone) contact.phone = req.body.phone;
  if (req.body.specialization) contact.specialization = req.body.specialization;

  user.contacts.push(contact);
  user.save();

  return res.json({ message: "added", contact: contact });
});

contactRouter.get("/getUserContacts", checkUser, async (req, res) => {
  const user = await User.findById(req.checkData.id);
  if (!user) return res.status(403).json("Error!");
  return res.json(user.contacts);
});
export default contactRouter;
