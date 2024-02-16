import React from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import useMediaQuery from "../hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

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

const secondData = {
  labels: ["2022", "2023", "2024", "2025", "2026"],
  datasets: [
    {
      label: "High value voluntary",
      data: [20, 25, 30, 40, 140],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
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
  const { t } = useTranslation();
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section>
      <div className="flex flex-col w-full justify-center items-center ">
        <div className="flex  w-full mt-10 py-20 justify-center items-center">
          <p className="flex my=-10  font-bigshoulder justify-center items-center font-extrabold text-5xl md:3xl sm:xl">
            {t("marketopportunity.title")}
          </p>
        </div>
        {isAboveLarge ? (
          <div className="flex flex-col w-full  gap-8 py-10 pb-48 font-semibold">
            <div className="flex flex-row h-full">
              <div className="flex w-[40%] items-start">
                <Line data={data} options={config} />
              </div>
              <div className="flex px-20 font-bigshoulder tracking-wider text-2xl items-center justify-center w-[60%]">
                {t("marketopportunity.graph1")}
              </div>
            </div>

            <div className="flex flex-row h-full">
              <div className="flex px-20 font-bigshoulder  tracking-wider text-2xl items-center justify-center w-[60%]">
                <p>
                  {t("marketopportunity.graph2t1")}{" "}
                  <span className="text-orange-900 font-extrabold tracking-wide">
                    {t("marketopportunity.waven3tech")}
                  </span>{" "}
                  {t("marketopportunity.graph2t2")}
                </p>
              </div>
              <div className="flex w-[40%] items-end">
                <Line data={secondData} options={config} />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col py-10 items-center">
            <div className="flex px-20 font-bigshoulder  tracking-wider text-xl items-center w-full">
              {t("marketopportunity.graph1")}
            </div>
            <div className="flex w-[70%] py-20">
              <Line data={data} options={config} />
            </div>
            <div className="flex px-20 font-bigshoulder  tracking-wider text-xl items-center w-full">
              {t("marketopportunity.graph2t1")}{" "}
              {t("marketopportunity.waven3tech")}{" "}
              {t("marketopportunity.graph2t2")}
            </div>
            <div className="flex w-[70%] py-20">
              <Line data={secondData} options={config} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MarketOpportunity;
