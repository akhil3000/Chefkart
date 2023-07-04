import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [dishes, setDishes] = useState([]);
  const [dish, setDish] = useState(null);
  // Fetch Blog Data
  const fetchDishes = async () => {
    try {
      const res = await fetch(baseUrl);
      const dishesJson = await res.json();
      setDishes(dishesJson)
    } catch (error) {
      console.log("Error in Fetching dishes", error);
      setDishes(null);
    }
  };

  const fetchDish = async (id) => {
    let url = `${baseUrl}${id}`
    try {
      const res = await fetch(url);
      const dishJson = await res.json();
      setDish(dishJson)
    } catch (error) {
      console.log("Error in Fetching dishes", error);
      setDish(null);
    }
  }


  const value = {
    dishes,
    setDishes,
    dish,
    setDish,
    fetchDish,
    fetchDishes
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
