import React from "react";
import "./SideBar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Group,
  Apartment,
  AttachMoney,
  Assessment,
} from "@material-ui/icons";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        {/*<==================== Dashboard ============== > */}
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
        {/*<==================== Quick Menu============== > */}
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Quick Menu</h3>

          <ul className="sidebar_list">
            {/* < ==== Users  =====> */}
            <li className="sidebar_list_item ">
              <Group className="sidebar_icon" />
              Users
            </li>
            {/* < ====  Products =====> */}
            <li className="sidebar_list_item">
              <Apartment className="sidebar_icon" />
              Products
            </li>
            {/* < ====  Transactions =====> */}
            <li className="sidebar_list_item">
              <AttachMoney className="sidebar_icon" />
              Transactions
            </li>
            {/* < ====  Reports =====> */}
            <li className="sidebar_list_item">
              <Assessment className="sidebar_icon" />
              Reports
            </li>
          </ul>
        </div>
        {/*<==================== Side Bar Menu ============== > */}
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Notifications</h3>

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
        {/*<==================== Side Bar Menu ============== > */}
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Staff</h3>

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
        {/* < ================================================ >  */}
      </div>
    </div>
  );
}
