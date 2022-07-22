import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";

function App() {
  const [cities, setCities] = useState();
  console.log(cities);
  var options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    params: { countryIds: "IN", namePrefix: "del", limit: "5" },
    headers: {
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setCities(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="app">
      <Home cities={cities} />
    </div>
  );
}

export default App;
