import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import StarIcon from "@material-ui/icons/Star";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/Inbox";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";

import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import SidebarOption from "./SidebarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title={"Inbox"}
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title={"Starred"} number={5} />
      <SidebarOption Icon={ScheduleIcon} title={"Snoozed"} number={15} />
      <SidebarOption
        Icon={LabelImportantIcon}
        title={"Important"}
        number={10}
      />
      <SidebarOption Icon={NearMeIcon} title={"Sent"} number={4} />
      <SidebarOption Icon={NoteIcon} title={"Drafts"} number={1} />
      <SidebarOption Icon={ExpandMoreIcon} title={"More"} number={32} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
