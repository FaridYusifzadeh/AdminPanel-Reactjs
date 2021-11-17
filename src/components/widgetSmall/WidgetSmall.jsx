import { Visibility } from "@material-ui/icons";
import "./WidgetSmall.css";
export default function WidgetSmall() {
  return (
    <div className="widget_small">
      <span className="widget_small_title">New Join Members</span>
      <ul className="widget_small_list">
        {/* < ======================= USERS ======================== > */}
        <li className="widget_small_list_item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="avatar"
            className="widget_small_img"
          />
          <div className="widget_small_user">
            <span className="widget_small_username">Farid Yusifzadeh</span>
            <span className="widget_small_user_title">Front End Developer</span>
          </div>
          <button className="widget_small_btn">
            <Visibility className="widget_small_icon" />
            Display
          </button>
        </li>
        {/* < ======================= USERS ======================== > */}
        <li className="widget_small_list_item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="avatar"
            className="widget_small_img"
          />
          <div className="widget_small_user">
            <span className="widget_small_username">Farid Yusifzadeh</span>
            <span className="widget_small_user_title">Front End Developer</span>
          </div>
          <button className="widget_small_btn">
            <Visibility className="widget_small_icon" />
            Display
          </button>
        </li>
        {/* < ======================= USERS ======================== > */}
        <li className="widget_small_list_item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="avatar"
            className="widget_small_img"
          />
          <div className="widget_small_user">
            <span className="widget_small_username">Farid Yusifzadeh</span>
            <span className="widget_small_user_title">Front End Developer</span>
          </div>
          <button className="widget_small_btn">
            <Visibility className="widget_small_icon" />
            Display
          </button>
        </li>
        {/* < ======================= USERS ======================== > */}
        <li className="widget_small_list_item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="avatar"
            className="widget_small_img"
          />
          <div className="widget_small_user">
            <span className="widget_small_username">Farid Yusifzadeh</span>
            <span className="widget_small_user_title">Front End Developer</span>
          </div>
          <button className="widget_small_btn">
            <Visibility className="widget_small_icon" />
            Display
          </button>
        </li>
        {/* < ======================= USERS ======================== > */}
        <li className="widget_small_list_item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="avatar"
            className="widget_small_img"
          />
          <div className="widget_small_user">
            <span className="widget_small_username">Farid Yusifzadeh</span>
            <span className="widget_small_user_title">Front End Developer</span>
          </div>
          <button className="widget_small_btn">
            <Visibility className="widget_small_icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
