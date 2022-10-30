import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./Project";
import Dashboard from "./Dashboard";
import ProjectDetails from "./ProjectDetails";
import AllProjectBudgetPlot from "./AllProjectBudgetPlot";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="/" element={<Dashboard />} />
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
  </React.StrictMode>
);
