import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./components/Home/Home";
import { getCities } from "./features/placesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
