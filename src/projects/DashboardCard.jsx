import { Link } from "react-router-dom";

const DashboardCard = ({ project }) => {
  return (
    <Link to={`project/${project.projectId}`} className="card-dashboard">
      <div>
        <span className="field">ProjectID</span>:
        <span className="field">{project.projectId}</span>
      </div>
      <div>
        <span className="field">Project Name</span>:
        <span className="field">{project.projectName}</span>
      </div>
      <div>
        <span className="field">Budget</span>:
        <span className="field bold">₹{project.site.budget}</span>
      </div>
      <div>
        <span className="field">End Date</span>:
        <span className="field bold">
          {new Date(project.site.endDate).toLocaleDateString()}
        </span>
      </div>
    </Link>
  );
};
export default DashboardCard;
