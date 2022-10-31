import { AiFillHome } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";
import { BsBarChartLine } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="sidebar-container ">
      <button className="btn btn-exit" onClick={() => toggleSidebar()}>
        X
      </button>
      <div className="icon-container">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "icon active" : "icon")}
        >
          <AiFillHome />
        </NavLink>
        <NavLink
          to="/report/pdfreport"
          className={({ isActive }) => (isActive ? "icon active" : "icon")}
        >
          <BiDetail />
        </NavLink>
        <NavLink
          to="/report/allprojectbudgetplot"
          className={({ isActive }) => (isActive ? "icon active" : "icon")}
        >
          <BsBarChartLine />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
