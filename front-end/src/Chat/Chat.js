import React, {useState} from "react";
import "./chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from '../axios/axios'

function Chat({ messages }) {
  const[input, setInput] = useState('')
  const sendMessage = (e) => {
    e.preventDefault()
    axios.post("/messages/new", {
      message: input,
      name: "moath",
      timestamp: "30/12/2021 10:30 AM",
      received: true,
    });
    setInput("")
  }
  const mesagesList = messages.map((message) => {
    return (
      <p className={`chat__message ${message.received && "chat__reciver"} `}>
        <span className="chat__name">{message.name}</span>
        {message.message}
        <span className="chat__timestamp"> {message.timestamp} </span>
      </p>
    );
  })
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen at ....</p>
        </div>
        <div className="chat__headerRigth">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {mesagesList}
        {/* <p className="chat__message">
          <span className="chat__name">Moath </span>
          this is a message
          <span className="chat__timestamp"> {new Date().toUTCString()} </span>
        </p>
        <p className="chat__message chat__reciver">
          <span className="chat__name">Moath </span>
          this is a message
          <span className="chat__timestamp"> {new Date().toUTCString()} </span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Moath </span>
          this is a message
          <span className="chat__timestamp"> {new Date().toUTCString()} </span>
        </p>
        <p className="chat__message chat__reciver">
          <span className="chat__name">Moath </span>
          this is a message
          <span className="chat__timestamp"> {new Date().toUTCString()} </span>
        </p> */}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={(e) => {setInput(e.target.value);}} type="text" placeholder="type a message" />
          <button onClick={sendMessage} type="submit">send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
