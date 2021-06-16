import React from "react";
import chartCss from "./chart.module.css";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className={chartCss.coinData_container}>
          <div className="data_col">
            <div className={chartCss.item_1}>
              <h3 className={chartCss.item_head}>Market Cap</h3>
              <p className={chartCss.item_num}>{data.market_cap}</p>
            </div>
            <div className={chartCss.item_2}>
              <h3 className={chartCss.item_head}>Total Supply</h3>
              <p className={chartCss.item_num}>{data.total_supply}</p>
            </div>
          </div>

          <div className="data_col">
            <div className={chartCss.item_1}>
              <h3 className={chartCss.item_head}>Volume(24H)</h3>
              <p className={chartCss.item_num}>{data.total_volume}</p>
            </div>
            <div className={chartCss.item_2}>
              <h3 className={chartCss.item_head}>high 24h</h3>
              <p className={chartCss.item_num}>{data.high_24h}</p>
            </div>
          </div>

          <div className="data_col">
            <div className={chartCss.item_1}>
              <h3 className={chartCss.item_head}>Circulating Supply</h3>
              <p className={chartCss.item_num}>{data.circulating_supply}</p>
            </div>
            <div className={chartCss.item_2}>
              <h3 className={chartCss.item_head}>low 24h</h3>
              <p className={chartCss.item_num}>{data.low_24h}</p>
            </div>
          </div>
        </div>
      );
    }
  };
  return <>{renderData()}</>;
};

export default CoinData;
