import React from "react";
import "./SideBar.css";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        {/* Side Bar Menu */}
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Dashboard</h3>

          <ul className="sidebar_list">
            {/* < ==== Home  =====> */}
            <li className="sidebar_list_item active">
              <LineStyle className="sidebar_icon" />
              Home
            </li>
            {/* < ====  Analytics =====> */}
            <li className="sidebar_list_item">
              <Timeline className="sidebar_icon" />
              Analytics
            </li>
            {/* < ====  Sales =====> */}
            <li className="sidebar_list_item">
              <TrendingUp className="sidebar_icon" />
              Sales
            </li>
          </ul>
        </div>
        {/* Side Bar Menu */}
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Dashboard</h3>

          <ul className="sidebar_list">
            {/* < ==== Home  =====> */}
            <li className="sidebar_list_item ">
              <LineStyle className="sidebar_icon" />
              Home
            </li>
            {/* < ====  Analytics =====> */}
            <li className="sidebar_list_item">
              <Timeline className="sidebar_icon" />
              Analytics
            </li>
            {/* < ====  Sales =====> */}
            <li className="sidebar_list_item">
              <TrendingUp className="sidebar_icon" />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
