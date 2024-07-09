const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors=require("colors"); 
const userRoutes=require("./routes/userRoutes");
const {notFound,errorHandler}=require("./middleware/errorMiddleware");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());  //to accept json data

app.get("/", (req, res) => {
  res.send("Api is running successfully");
});

// app.get("/api/chat",(req,res)=>{
//   res.send(chats);
// })
// app.get("/api/chat/:id", (req, res) => {
//   //   res.send(chats);
//   //console.log(req);
//   console.log(req.params.id);
//   const singleChat = chats.find((c) => c._id == req.params.id);
//   res.send(singleChat);
// });

app.use("/api/user",userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`.yellow.bold));
