// Components
import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topBar/TopBar";
// Pages
import Home from "./pages/home/Home.jsx";
// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Style Css
import "./App.css";
function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
