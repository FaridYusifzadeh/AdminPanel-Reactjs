import React from "react";
import "./TopBar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar_wrapper">
          <div className="top_left">
              <span className="logo">
                  Farid Yusifzadeh
              </span>
          </div>
          <div className="top_right">
              <div className="topbar_icons">

              </div>
          </div>
      </div>
    </div>
  );
}
