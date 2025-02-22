import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restId) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${MENU_API}${restId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        setResInfo(json?.data || {}); 
      } catch (err) {
        console.error("Error fetching menu:", err);
        setError(err.message);
        setResInfo({});
      }
    };
    if (restId) {
      fetchData();
    }
  }, [restId]);

  return { resInfo, error };
};

export default useRestaurantMenu;
