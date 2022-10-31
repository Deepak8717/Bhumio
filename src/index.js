import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./projects/Project";
import Dashboard from "./projects/Dashboard";
import ProjectDetails from "./projects/ProjectDetails";
import AllProjectBudgetPlot from "./projects/AllProjectBudgetPlot";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import NewProjectForm from "./projects/NewProject";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<App />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/newproject" element={<NewProjectForm />} />
            <Route path="project/:projectId" element={<Project />} />
            <Route path="report">
              <Route path="pdfreport" element={<ProjectDetails />} />
              <Route
                path="allprojectbudgetplot"
                element={<AllProjectBudgetPlot />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
