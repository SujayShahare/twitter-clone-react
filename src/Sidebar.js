import React from "react";
import "./Sidebar.css";
import { Twitter } from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { MailOutline } from "@mui/icons-material";
import { BookmarkBorder } from "@mui/icons-material";
import { ListAlt } from "@mui/icons-material";
import { PermIdentity } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import { Button } from "@mui/material";


function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter Icon */}
            <Twitter className="sidebar__twitterIcon"/>

            {/* Sidebar */}
            <SidebarOption active Icon={HomeIcon} text = "Home" />
            <SidebarOption Icon={SearchIcon} text = "Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text = "Notifications" />
            <SidebarOption Icon={MailOutline} text= "Messages"/>
            <SidebarOption Icon={BookmarkBorder} text= "Bookmarks"/>
            <SidebarOption Icon={ListAlt} text= "Lists"/>
            <SidebarOption Icon={PermIdentity} text= "Profile"/>
            <SidebarOption Icon={MoreHoriz} text= "More"/>

            {/* Button for tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Tweet
            </Button>
        </div>
    );
}

export default Sidebar;