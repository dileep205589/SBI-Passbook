const UserModel = require("../models/UserModel");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dg6g8fnii",
  api_key: "364626995131484",
  api_secret: "HF5XJowO_L21gOejLPjOORKI_ts",
  // secure: true
});

class UserController {
  static async addUser(req, res) {
    try {
      const {
        cif,
        ac,
        ifsc,
        name,
        lastName,
        middleName,
        address,
        village,
        pincode,
        KOName,
        KOLocation,
      } = req.body;
      const file = req.files.image;
      console.log(file);
      const imageUpload = await cloudinary.uploader.upload(file.tempFilePath,
        {folder: "SbiPassbook"}
      );
      const user = new UserModel({
        cif,
        ac,
        ifsc,
        name,
        lastName,
        middleName,
        address,
        village,
        pincode,
        KOName,
        KOLocation,
        image: {
          public_id: imageUpload.public_id,
          url: imageUpload.secure_url,
        },
      });
      const addUser = await user.save();

      console.log(req.body)
      res.status(201).json({ message: "User added successfully", addUser });
    } catch (error) {
      res.status(500).json({ message: "Error adding user", error });
    }
  }

  static async getAllUser(req, res) {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users", error });
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({status: "success", user});
    } catch (error) {
      res.status(500).json({ message: "Error fetching user", error });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error });
    }
  }
}
module.exports = UserController;
