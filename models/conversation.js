import mongoose from "mongoose";

const conversationSchema = mongoose.Schema(
  {
    members: {
      type: Array,
      required:true,   
    },
    messages: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Conversations = mongoose.model("conversations", conversationSchema);

export default Conversations;