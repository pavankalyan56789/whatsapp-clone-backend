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


  export const getUser = async (request, response) => {
    try {
      //The backend got the data from users collection database usign find({})
        let users = await Users.find({});
      //Now that we got the data, we have to return the data to the frontend, that's why there is return response statement
      //Here, we cannot directly return the users, instead we have to return the users as a response.
        return response.status(200).json(users);
    } catch (error) {
      response.status(500).json(error.message);
    }
  };