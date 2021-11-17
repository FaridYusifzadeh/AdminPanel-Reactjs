// Components
import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topBar/TopBar";
// Pages
import Home from "./pages/home/Home.jsx";
// Style Css
import "./App.css";
function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
