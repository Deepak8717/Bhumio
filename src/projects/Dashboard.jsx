import { useDispatch, useSelector } from "react-redux";
import DashboardCard from "./DashboardCard";
import { data } from "./data";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projects.projectList);
  return (
    <div className="wrapper">
      <h1>Welcome to Dashboard</h1>

      <div className="container">
        <div className="btn-container">
          <Link to="/newproject" className="btn-new">
            Create New Project
          </Link>
        </div>
        {projectList.map((project, index) => {
          return <DashboardCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
