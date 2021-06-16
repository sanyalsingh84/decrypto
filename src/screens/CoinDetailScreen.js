import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import HistoryChart from "../Components/HistoryChart";
import CoinData from "./../Components/CoinData";
import chartCss from "../Components/chart.module.css";
import Loader from "../Components/Loader";

const baseUrl = "https://api.coingecko.com/api/v3/coins";

const CoinDetailScreen = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchDetailedData = async () => {
      setIsLoading(true);
      await Promise.allSettled([
        axios.get(`${baseUrl}/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        axios.get(`${baseUrl}/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        axios.get(`${baseUrl}/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        axios.get(`${baseUrl}/markets/`, {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
      ])
        .then((result) => {
          const [day, week, year, details] = result;
          const status = "fulfilled";
          if (day.status === status) {
            setCoinData((prevState) => {
              return { ...prevState, day: formatData(day.value.data.prices) };
            });
          }
          if (week.status === status) {
            setCoinData((prevState) => {
              return { ...prevState, week: formatData(week.value.data.prices) };
            });
          }
          if (year.status === status) {
            setCoinData((prevState) => {
              return { ...prevState, year: formatData(year.value.data.prices) };
            });
          }
          if (details.status === status) {
            setCoinData((prevState) => {
              return { ...prevState, details: details.value.data[0] };
            });
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchDetailedData();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={chartCss.coinDetailList}>
      <div className={chartCss.return}>
        <button className={chartCss.btn}>
          <Link to="/">Go back</Link>
        </button>
      </div>
      <HistoryChart data={coinData} />
      <CoinData data={coinData.details} />
    </div>
  );
};

export default CoinDetailScreen;
