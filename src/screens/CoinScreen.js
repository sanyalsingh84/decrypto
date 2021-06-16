import React, { useEffect, useState } from "react";
import axios from "axios";
import Coins from "../Components/Coins";
import SearchBar from "../Components/SearchBar";
import Loader from "../Components/Loader";

const CoinScreen = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedCoins, setSearchedCoins] = useState([]);

  const handleFilter = (search) => {
    const searchItem = search.toLowerCase();
    const tempArr = [...coins];
    const filteredArr = tempArr.filter((item) => {
      const itemName = item.name.toLowerCase();
      return itemName.startsWith(searchItem);
    });
    if (searchItem) {
      setSearchedCoins(filteredArr);
    } else {
      setSearchedCoins([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );

        setIsLoading(false);
        setCoins(data);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <SearchBar handleFilter={handleFilter} />
      <div className="main">
        {searchedCoins.length > 0 ? (
          <Coins coins={searchedCoins} />
        ) : (
          <Coins coins={coins} />
        )}
      </div>
    </>
  );
};

export default CoinScreen;
