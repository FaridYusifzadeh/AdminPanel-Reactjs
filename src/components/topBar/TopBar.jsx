import React from "react";
import "./TopBar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar_wrapper">
        <div className="top_left">
          <span className="logo">Farid Yusifzadeh</span>
        </div>
        <div className="top_right">
          {/* =======  notification ======== */}
          <div className="topbar_icons_container">
            <NotificationsNone />
            <span className="top_icon_badge">2</span>
          </div>
          {/* ============= language icon ============= */}
          <div className="topbar_icons_container">
            <Language />
          </div>
          {/* ============= settings ============= */}
          <div className="topbar_icons_container">
            <Settings />
          </div>
          <img
            className="topavatar"
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="topavatar"
          />
        </div>
      </div>
    </div>
  );
}
