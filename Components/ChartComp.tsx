import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComp = ({ data }: any) => {
  Chart.register(ArcElement);

  return (
    <>
      <Pie data={data} />
    </>
  );
};

export default ChartComp;
