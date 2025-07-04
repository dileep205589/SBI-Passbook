const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    cif: {
      type: String,
      required: true,
    },
    ac: {
      type: String,
      required: true,
    },
    ifsc: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    village: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    KOName: {
      type: String,
    },
    KOLocation: {
      type: String,
    },
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
