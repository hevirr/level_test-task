import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Выручка",
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

export default function ChartForAdmins({ labels, currentGame }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Уголь",
        data: labels.map((label) => {
          if (label !== "Эталон") {
            return (
              currentGame.teams.find((team) => team.name === label).coal *
              currentGame.model.coal.marketPrice
            );
          } else {
            return (
              currentGame.model.coal.requiredQuantity *
              currentGame.model.coal.marketPrice
            );
          }
        }),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Железо",
        data: labels.map((label) => {
          if (label !== "Эталон") {
            return (
              currentGame.teams.find((team) => team.name === label).iron *
              currentGame.model.iron.marketPrice
            );
          } else {
            return (
              currentGame.model.iron.requiredQuantity *
              currentGame.model.iron.marketPrice
            );
          }
        }),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
