// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./DB/dbMessages.js";
import Pusher from "pusher";
import Cors from 'cors'

// app config

const app = express();
const port = process.env.PORT || 8080;
const pusher = new Pusher({
  appId: "1323917",
  key: "4f93c3cdd93e1f9a8ed9",
  secret: "e37a2e3fbeac0d10b97d",
  cluster: "ap2",
  useTLS: true,
});

// middleware

app.use(express.json());
app.use(Cors())

// DB config
const db_url =
  "mongodb+srv://root:1431993@chat-backend-mern.ovf9b.mongodb.net/Chat-Backend-Mern?retryWrites=true&w=majority";
// const mongoose_url =
//     "mongodb://localhost:27017/chat-app";
mongoose.connect(db_url);

const db = mongoose.connection;

db.once("open", () => {
  console.log("db connected");
  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("test message");
    console.log("A change log ", change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("error trigering pusher");
    }
  });
});

// const collection = db.collection("messagecontents");
// const changeStream = await collection.watch();
// changeStream.on("change", (next) => {
//   // process next document
//   if (next.operationType === "insert") {
//     const messageDetails = next.fullDocument;
//     pusher.trigger("messages", "inserted", {
//       name: messageDetails.user,
//       message: messageDetails.message,
//     });
//   } else {
//     console.log("error trigering pusher");
//   }
// });

// ???

// api routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created: \n ${data}`);
    }
  });
});

// listen
app.listen(port, () => {
  console.log(`the server is running at ${port} port`);
  console.log(`Listening on localhost:${port}`);
});
