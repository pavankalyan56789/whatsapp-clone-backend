import Conversations from "../models/conversation.js";


export const addConversation = async (request, response) => {
    console.log(request.body);

    //request.body.data is { senderId: account.sub, receiverId: user.sub }
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
    
        const exists = await Conversations.findOne({
          members: {
            $all: [senderId, receiverId],
          },
        });

        if(exists){
            response.status(200).json("Conversation already exists");
        }
    } catch (error) {
      response.status(500).json(error.message);
    }
  };


// Conversation :
// {
//     messages : [],
//     members : [senderID, receiverID],
//     createdAt,
//     updatedAT
// }