import React from "react";
import "./sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Avatar } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChats from './../SidebarChats/SidebarChats';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
          </div>
          <div className="sidebar__search">
              <div className="sidebar__searchContainer">
                  <SearchOutlinedIcon />
                  <input type='text' placeholder="Search or Start New Chat" />
            </div>
          </div>
          <div className="sidebar__chats">
              <SidebarChats />
              <SidebarChats />
              <SidebarChats />
          </div>
    </div>
  );
}

export default Sidebar;
