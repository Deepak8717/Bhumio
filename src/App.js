import "./App.css";
import Sidebar from "./layouts/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
function App() {
  const projectList = useSelector((state) => state.projects.projectList);
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
