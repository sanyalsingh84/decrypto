import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CoinScreen from "./screens/CoinScreen";
import CoinDetailScreen from "./screens/CoinDetailScreen";
import Header from "./Components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/coins/:id" component={CoinDetailScreen} />
      <Route exact path="/" component={CoinScreen} />
    </Router>
  );
};

export default App;
