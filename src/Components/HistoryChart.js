import React, { useRef, useEffect, useState, useCallback } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../chartConfigs/chartConfigs";
import chartCss from "./chart.module.css";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, details } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = useCallback(() => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  }, [day, week, year, timeFormat]);

  useEffect(() => {
    if (chartRef && chartRef.current && details) {
      Chartjs.defaults.global.defaultFontColor = "#fff";
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${details.name} price`,
              data: determineTimeFormat(),
              backgroundColor: "rgba(30, 33, 250, 0.4)",
              borderColor: "rgba(30, 33, 250, 0.8)",
              borderWidth: 1,
              pointRadius: 0,
              tension: 0,
            },
          ],
        },
        options: { ...historyOptions },
      });
    }
  }, [day, details, determineTimeFormat]);

  return (
    <div className={chartCss.chart}>
      <div className={chartCss.chart_style}>
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>
      <div className={chartCss.chart_btn}>
        <button className={chartCss.btn} onClick={() => setTimeFormat("24h")}>
          24h
        </button>
        <button className={chartCss.btn} onClick={() => setTimeFormat("7d")}>
          7d
        </button>
        <button className={chartCss.btn} onClick={() => setTimeFormat("1y")}>
          1y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
