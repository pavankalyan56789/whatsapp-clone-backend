import express from "express"
import { addUser, getUser } from "../controllers/user-controller.js";
import { addConversation, getConversation } from "../controllers/conversation-controller.js";


const route = express.Router();

route.post("/users/add", addUser);
route.get("/users/get", getUser);
route.post("/conversation/add", addConversation);
route.get("/conversation/get", getConversation);

export default route;





// //Messsages are stored a list of objects here: 
// messages = {
//     text : "Hello",
//     type : 'text'
//     senderID : sender sub,
//     receiverID : receiver sub,
//     timestamp:auto generated,
// }