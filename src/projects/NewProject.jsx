import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../redux/projectSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewProjectForm = () => {
  const dispatch = useDispatch();
  const singleProject = useSelector((state) => state.projects.project);
  const projectList = useSelector((state) => state.projects.projectList);
  const [project, setProject] = useState(singleProject);
  const [successMsg, setSuccessMsg] = useState(false);
  const [message, setMessage] = useState(" Project was sucessfully added");

  //assign the project id
  const projectId = (
    Number(projectList[projectList.length - 1].projectId) + 1
  ).toString();

  const handleOnChange = (e) => {
    setSuccessMsg(false);
    setProject({
      ...project,
      projectId: projectId,
      [e.target.name]: e.target.value,
      supplier: {
        ...project.supplier,
        [e.target.name]: e.target.value,
      },
      site: {
        ...project.site,
        [e.target.name]: e.target.value,
      },
      status: {
        ...project.status,
        [e.target.name]: e.target.value,
      },
    });
  };
  const handlClearInput = () => {
    setProject(singleProject);
  };

  const handleDatePickerChange = (name, date) => {
    name === "startDate"
      ? setProject((project) => ({
          ...project,
          [name]: date,
        }))
      : setProject((project) => ({
          ...project,
          site: {
            ...project.site,
            [name]: date,
          },
        }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.projectName !== "") {
      dispatch(addProject(project));
      handlClearInput();
      setMessage("Project was sucessfully added");
      setSuccessMsg(true);
    } else {
      setMessage("Please complete your enteries");
      setSuccessMsg(true);
    }
  };
  return (
    <div className="wrapper">
      <form className="container" onSubmit={(e) => handleSubmit(e)}>
        <div className="card-dashboard">
          <div>
            <label htmlFor="projectId" className="field">
              ProjectId
            </label>
            <input
              type="number"
              name="projectId"
              min={2234005}
              value={projectId}
              // onChange={(e) => handleOnChange(e)}
              className="field"
              disabled={true}
            />
          </div>
          <div>
            <label htmlFor="projectName" className="field">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              value={project.projectName}
              onChange={(e) => handleOnChange(e)}
              className="field"
            />
          </div>
          <div>
            <label htmlFor="projectManager" className="field">
              Project Manager
            </label>
            <input
              type="text"
              name="projectManager"
              value={project.projectManager}
              onChange={(e) => handleOnChange(e)}
              className="field"
            />
          </div>
          <div>
            <label htmlFor="startDate" className="field">
              start Date
            </label>
            <DatePicker
              name="startDate"
              dateFormat="dd/MM/yyyy"
              selected={project.startDate}
              onChange={(date) => handleDatePickerChange("startDate", date)}
              todayButton={"Today"}
              className="field"
            />
          </div>
        </div>
        <div className="card-dashboard">
          <div>
            <label htmlFor="siteAddress" className="field">
              Site Address
            </label>
            <input
              type="text"
              name="siteAddress"
              value={project.site.siteAddress}
              onChange={(e) => handleOnChange(e)}
              className="field"
            />
          </div>
          <div>
            <label htmlFor="railwayStation" className="field">
              Railway Station
            </label>
            <input
              type="text"
              name="railwayStation"
              value={project.site.railwayStation}
              onChange={(e) => handleOnChange(e)}
              className="field"
            />
          </div>
          <div>
            <label htmlFor="budget" className="field">
              Budget
            </label>
            <input
              type="number"
              name="budget"
              value={project.site.budget}
              onChange={(e) => handleOnChange(e)}
              className="field"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="field">
              End Date
            </label>
            <DatePicker
              name="endDate"
              dateFormat="dd/MM/yyyy"
              selected={project.site.endDate}
              onChange={(date) => handleDatePickerChange("endDate", date)}
              todayButton={"Today"}
              className="field"
            />
          </div>
        </div>
        <div className="card-dashboard">
          <div>
            <label htmlFor="supplier1" className="field">
              Supplier1
            </label>
            <input
              type="text"
              name="supplier1"
              value={project.supplier.supplier1}
              onChange={(e) => handleOnChange(e)}
              className="field"
            />
          </div>
          <div>
            <label htmlFor="contactPerson" className="field">
              Contact Person
            </label>
            <input
              type="text"
              name="contactPerson"
              value={project.supplier.contactPerson}
              onChange={(e) => handleOnChange(e)}
              className="field"
            />
          </div>
          <div>
            <label htmlFor="Phone" className="field">
              Phone
            </label>
            <input
              type="number"
              name="Phone"
              value={project.supplier.Phone}
              onChange={(e) => handleOnChange(e)}
              className="field"
            />
          </div>
          <div>
            <label htmlFor="email" className="field">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={project.supplier.email}
              onChange={(e) => handleOnChange(e)}
              className="field"
            />
          </div>
        </div>
        <div className="card-dashboard">
          <div>
            <label htmlFor="projectStatus" className="field">
              Project status
            </label>
            <input
              type="text"
              name="projectStatus"
              value={project.status.projectStatus}
              onChange={(e) => handleOnChange(e)}
              className="field"
            />
          </div>
        </div>
        <button className="project-details-btn bold">Submit Details</button>
      </form>
      {successMsg && <div style={{ fontSize: "20px" }}>{message}</div>}
    </div>
  );
};
export default NewProjectForm;
