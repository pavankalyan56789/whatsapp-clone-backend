import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("users", userSchema);

export default Users;