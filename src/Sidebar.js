import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import Avatar from "@material-ui/icons/Person";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={Avatar} src="" title="Vincent" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={ExpandMoreOutlined} title="" />
    </div>
  );
}

export default Sidebar;
