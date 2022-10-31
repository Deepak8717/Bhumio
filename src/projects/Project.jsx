import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { data } from "./data";

const Project = () => {
  let { projectId } = useParams();
  const projectList = useSelector((state) => state.projects.projectList);
  const index = projectList.findIndex((item) => item.projectId === projectId);
  const project = projectList[index];
  return (
    <div className="wrapper">
      <h1>Project -{projectId}</h1>
      <div className="container">
        <div className="card-dashboard">
          <div>
            <span className="field">ProjectID</span>:
            <span className="field">{project.projectId}</span>
          </div>
          <div>
            <span className="field">Project Name</span>:
            <span className="field bold">{project.projectName}</span>
          </div>
          <div>
            <span className="field">Project Manager</span>:
            <span className="field bold">{project.projectManager}</span>
          </div>
          <div>
            <span className="field">Start Date</span>:
            <span className="field ">
              {new Date(project.startDate).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="card-dashboard">
          <div>
            <span className="field">Site Address</span>:
            <span className="field bold">{project.site.siteAddress}</span>
          </div>
          <div>
            <span className="field">Railway Station</span>:
            <span className="field">{project.site.railwayStation}</span>
          </div>
          <div>
            <span className="field">Budget</span>:
            <span className="field bold">₹{project.site.budget}</span>
          </div>
          <div>
            <span className="field">End Date</span>:
            <span className="field">
              {new Date(project.site.endDate).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="card-dashboard">
          <div>
            <span className="field">Supplier1</span>:
            <span className="field">{project.supplier.supplier1}</span>
          </div>
          <div>
            <span className="field">Contact Person</span>:
            <span className="field">{project.supplier.contactPerson}</span>
          </div>
          <div>
            <span className="field">Phone</span>:
            <span className="field bold">{project.supplier.Phone}</span>
          </div>
          <div>
            <span className="field">Email</span>:
            <span className="field ">{project.supplier.email}</span>
          </div>
        </div>
        <div className="card-dashboard">
          <div>
            <span className="field">Project Status</span>:
            <span className="field">{project.status.projectStatus}</span>
          </div>
        </div>
        <Link to="/report/pdfreport" className="project-details-btn bold">
          <div>Project Details</div>
        </Link>
      </div>
    </div>
  );
};

export default Project;
