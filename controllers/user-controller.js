import Users from "../models/user.js";

export const addUser = async (request, response) => {
    console.log(request.body);
    try {
      let exist = await Users.findOne({ sub: request.body.sub });
      if (exist) {
        response.status(200).json({ msg: "user already exists" });
        return;
      }
  
      const newUser = new Users(request.body);
      await newUser.save();
      return response.status(200).json(newUser);
    } catch (error) {
      response.status(500).json(error.message);
    }
  };