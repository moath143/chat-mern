import React from "react";
import "./chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
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
        <p className="chat__message">
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
        </p>
      </div>

      <div className="chat__footer">
              <InsertEmoticonIcon />
              <form>
                  <input type="text" placeholder='type a message' />
                  <button type='submit'>send a message</button>
              </form>
              <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
