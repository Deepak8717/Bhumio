import DashboardCard from "./DashboardCard";
import { data } from "./data";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <h1>Welcome to Dashboard</h1>
      <div className="container">
        {data.map((project, index) => {
          return <DashboardCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
