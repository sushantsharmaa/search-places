import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCities } from "./features/placesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  return <div className="app">Hello World!</div>;
}

export default App;
