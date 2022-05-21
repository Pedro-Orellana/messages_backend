import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    first_name: {type: String, required : true},
    last_name: {type: String, required :true},
    email: {type: String, required: true},
    message: {type: String}
})

const Message = mongoose.model("Message",messageSchema)

export default Message