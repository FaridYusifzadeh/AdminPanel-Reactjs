import "./Home.css";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import Chart from "../../components/chart/Chart.jsx";
import { userData } from "../../dummyData";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";

export default function Home() {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart
        data={userData}
        grid
        titel="Users Analytics"
        dataKey="Active User"
      />
      <div className="home_widgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
