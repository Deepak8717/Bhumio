import "./App.css";
import { data } from "./data";
import DashboardCard from "./DashboardCard";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function App() {
  const [sidebarDisplay, setSidebarDisplay] = useState(true);
  const toggleSidebar = () => {
    setSidebarDisplay(!sidebarDisplay);
  };
  return (
    <div className="App">
      {sidebarDisplay === true ? (
        <Sidebar toggleSidebar={toggleSidebar} />
      ) : (
        <GiHamburgerMenu
          className="btn menu-ham"
          onClick={() => toggleSidebar()}
        />
      )}

      <Outlet />
    </div>
  );
}

export default App;
