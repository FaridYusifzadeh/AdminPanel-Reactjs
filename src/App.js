import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topBar/TopBar";
import "./App.css";
function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="others">other pages</div>
      </div>
    </div>
  );
}

export default App;
