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
  try {
    user.contacts.push(contact);
    user.save();
    console.log("Added new contact.");
    return res.json({ message: "Added contact!", contact: contact });
  } catch (err) {
    console.log(err);
    return res.json({ message: "error" });
  }
});

contactRouter.get("/getUserContacts", checkUser, async (req, res) => {
  const user = await User.findById(req.checkData.id);
  if (!user) return res.status(403).json("Error!");
  return res.json(user.contacts);
});

contactRouter.delete("/deleteContact", checkUser, async (req, res) => {
  if (!req.body.contactID)
    return res.status(400).json("No contact to delete specified.");
  const contactID = req.body.contactID;
  let contact;
  try {
    let contactUser = await User.findOne({
      "contacts._id": contactID,
    });
    console.log(contactUser);
    if (contactUser._id != req.checkData.id)
      return res
        .status(403)
        .json("Forbidden: requesting user is not the same as contact owner.");
    if (!contact)
      return res
        .status(404)
        .json("No contact with respective ID for the user found.");
  } catch (err) {
    return res.status(400).json("Error in request: " + err);
  }

  contact.remove().catch((o) => console.log(o));
  return res.status(200).json(`Contact [${contact._id}] removed.`);
});
export default contactRouter;
