import "./App.css";
import { data } from "./data";
import DashboardCard from "./DashboardCard";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
