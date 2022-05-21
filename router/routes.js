import express from "express"
import expressAsyncHandler from "express-async-handler"
import Message from "../schemas/messageSchema.js"

const messageRouter = express.Router()

messageRouter.get("/list", expressAsyncHandler(async (req, res) => {
    const messages = await Message.find({})
    res.send(messages)
}))


messageRouter.post("/post",expressAsyncHandler(async(req, res) => {
    const newMessage = new Message({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        message: req.body.message
    })

    const savedMessage = await newMessage.save()
    res.send(savedMessage)

}))

export default messageRouter
