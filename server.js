import testRouter from "./router/routes.js";
import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'



const app = express();

app.use(express.json());

console.log(process.env.MONGO_ADMIN_PASSWORD)

mongoose.connect(process.env.MONGODB_URL || `mongodb+srv://${process.env.MONGO_ADMIN}:${process.env.MONGO_ADMIN_PASSWORD}@cluster0.ryfpx.mongodb.net/messages?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/message", testRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(4000, () => {
    console.log("Server is running at port 4000");
  });