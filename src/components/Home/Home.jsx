import React from "react";
import "./home.css";
import { City } from "country-state-city";

const Home = () => {
  const cities = City.getCitiesOfCountry("IN");
  console.log(cities);
  return <div>Home</div>;
};

export default Home;
