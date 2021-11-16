import React from "react";
import "./SideBar.css";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Dashboard</h3>

          <ul className="sidebar_list">
            {/* < ==== Home  =====> */}
            <li className="sidebar_list_item">
              <LineStyle />
              Home
            </li>
            {/* < ====  Analytics =====> */}
            <li className="sidebar_list_item">
              <Timeline />
              Analytics
            </li>
            {/* < ====  Sales =====> */}
            <li className="sidebar_list_item">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
