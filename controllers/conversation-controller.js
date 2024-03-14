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

        console.log("Conversation exists");
        console.log(exists);

        if(exists){
            response.status(200).json("Conversation already exists");
            return;
        }

        const newConversation = new Conversations(
          {
            members:[senderId, receiverId],
          }
        );
        await newConversation.save();
        response.status(200).json(newConversation);
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