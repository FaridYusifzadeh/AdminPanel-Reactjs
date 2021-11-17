import "./FeatureInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
export default function FeatureInfo() {
  return (
    <div className="featured_info">
      {/* < ================= Revanue =================== > */}
      <div className="featured_item">
        <span className="featured_title">Revanue</span>
        <div className="featured_monet_container">
          <span className="featured_money">$3.66</span>
          <span className="featured_money_rate">
            -14.33 <ArrowDownward className="featured_icon negative" />
          </span>
        </div>
        <span className="feature_sub">Compared to last month</span>
      </div>
      {/* < ================== Sales ================== > */}
      <div className="featured_item">
        <span className="featured_title">Sales</span>
        <div className="featured_monet_container">
          <span className="featured_money">$4.66</span>
          <span className="featured_money_rate">
            -17.33 <ArrowDownward className="featured_icon negative" />
          </span>
        </div>
        <span className="feature_sub">Compared to last month</span>
      </div>
      {/* < ================= Cost =================== > */}
      <div className="featured_item">
        <span className="featured_title">Cost</span>
        <div className="featured_monet_container">
          <span className="featured_money">$2.25</span>
          <span className="featured_money_rate">
            +2.44 <ArrowUpward className="featured_icon" />
          </span>
        </div>
        <span className="feature_sub">Compared to last month</span>
      </div>
    </div>
  );
}
