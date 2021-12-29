import React from "react";
import "./sidebarchats.css";
import { Avatar } from "@material-ui/core";

function SidebarChats() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>This is last message</p>
      </div>
    </div>
  );
}

export default SidebarChats;
