import { data } from "./data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    y: {
      title: {
        display: true,
        text: "₹ Crore",
        color: "blue",
      },
    },
    x: {
      title: {
        display: true,
        text: "Project ID",
        color: "blue",
      },
    },
  },
};

const AllProjectBudgetPlot = () => {
  const projectList = useSelector((state) => state.projects.projectList);
  const labels = [],
    budget = [];
  projectList.map(
    (project) => (
      labels.push(project.projectId), budget.push(project.site.budget)
    )
  );
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Budget in Crors",
        data: budget,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return (
    <div className="budget-chart-container">
      <Line options={options} data={data} />
    </div>
  );
};

export default AllProjectBudgetPlot;
