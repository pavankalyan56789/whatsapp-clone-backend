import express from "express"
import { addUser, getUser } from "../controllers/user-controller.js";
import { addConversation } from "../controllers/conversation-controller.js";


const route = express.Router();

route.post("/users/add", addUser);
route.get("/users/get", getUser);
route.post("/conversation/add", addConversation);

export default route;