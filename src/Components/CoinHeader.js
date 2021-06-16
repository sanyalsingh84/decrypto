import React from "react";

const CoinHeader = () => {
  return (
    <div className="coin-header">
      <div className="header-name">
        <h3>Name</h3>
      </div>
      <div className="header-details">
        <div className="header-price">
          <h3>price</h3>
        </div>
        <div className="header-change">
          <h3>CHG %</h3>
        </div>
        <div className="Mkt-cap">
          <h3>MKT CAP</h3>
        </div>
      </div>
    </div>
  );
};

export default CoinHeader;
