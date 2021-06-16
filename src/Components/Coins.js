import React from "react";
import { Link } from "react-router-dom";
import CoinHeader from "./CoinHeader";

const Coins = ({ coins }) => {
  return (
    <>
      <CoinHeader />
      {coins.map((coin, index) => {
        return (
          <Link to={`/coins/${coin.id}`} className="coin-item" key={index}>
            <div className="coin-head">
              <div className="coin-image">
                <img src={coin.image} alt={coin.name} />
              </div>
              <div className="coin-name">
                <h2>{coin.name}</h2>
              </div>
            </div>
            <div className="coin-details">
              <div className="coin-price">
                <p>{coin.current_price.toLocaleString()}</p>
              </div>
              <div className="coin-change">
                <p
                  className={
                    coin.price_change_percentage_24h < 0 ? "red" : "green"
                  }>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>
              <div className="coin-mkt">
                <p>{coin.market_cap.toLocaleString()}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Coins;
