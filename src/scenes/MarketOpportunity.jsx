import React from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import useMediaQuery from "../hooks/useMediaQuery";
import "./Graph.css";

Chart.register(...registerables);
const data = {
  labels: ["2022", "2023", "2024", "2025", "2026"],
  datasets: [
    {
      label: "High value voluntary",
      data: [90, 95, 100, 105, 110],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Compliance",
      data: [50, 75, 100, 125, 150],
      fill: false,
      borderColor: "#742774",
    },
    {
      label: "Low value voluntary",
      data: [20, 21, 22, 23, 35],
      fill: false,
      borderColor: "#F283FF",
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart - Cubic interpolation mode",
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
        suggestedMin: -10,
        suggestedMax: 200,
      },
    },
  },
};

const MarketOpportunity = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section>
      <div className="flex flex-col w-full ">
        <div className="flex  w-full mt-10 py-20 justify-center">
          <p className="my=-10  font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
            MARKET OPPORTUNITY
          </p>
        </div>
        {isAboveLarge ? (
          <div className="flex flex-col w-full  gap-8 py-10 pb-48 font-semibold">
            <div className="flex flex-row h-full">
              <div className="App flex w-[40%] items-start">
                <Line data={data} options={config} />
              </div>
              <div className="flex px-20 font-bigshoulder tracking-wider text-2xl items-center justify-center w-[60%]">
                Exponential demand pressure and inadequate faltering supply due
                to market friction presents transformative market opportunitie
              </div>
            </div>

            <div className="flex flex-row h-full">
              <div className="flex px-20 font-bigshoulder  tracking-wider text-2xl items-center justify-center w-[60%]">
                <p>
                  Bubble chart showing some of{" "}
                  <span className="text-orange-900 font-extrabold tracking-wide">
                    WAVEN3 Tech
                  </span>{" "}
                  market opportunities above a line chart showing a base and
                  worst case expected growth for the Voluntary Carbon Markets
                  until 2030 (2021 Market Estimates).
                </p>
              </div>
              <div className="App flex w-[40%] items-end">
                <Line data={data} options={config} />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col py-10 items-center">
            <div className="flex px-20 font-bigshoulder  tracking-wider text-xl items-center w-full">
              Exponential demand pressure and inadequate faltering supply due to
              market friction presents transformative market opportunities
            </div>
            <div className="flex w-[70%] py-20">
              <Line data={data} options={config} />
            </div>
            <div className="flex px-20 font-bigshoulder  tracking-wider text-xl items-center w-full">
              Bubble chart showing some of Waven 3 Tech market opportunities
              above a line chart showing a base and worst case expected growth
              for the Voluntary Carbon Markets until 2030 (2021 Market
              Estimates).
            </div>
            <div className="flex w-[70%] py-20">
              <Line data={data} options={config} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MarketOpportunity;
