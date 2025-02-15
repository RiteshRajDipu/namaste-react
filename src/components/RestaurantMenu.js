import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { restId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [restId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `${MENU_API}${restId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      setResInfo(json?.data || {});
    } catch (error) {
      console.error("Error fetching menu:", error);
      setResInfo({});
    }
  };

  if (!resInfo || !resInfo.cards) return <Shimmer />;

  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info || {};
  const name = restaurantInfo?.name || "Restaurant Name not Available";
  const cuisines = Array.isArray(restaurantInfo?.cuisines)
    ? restaurantInfo.cuisines.join(", ")
    : "Various Cuisines";
  const costForTwoMessage =
    restaurantInfo?.costForTwoMessage || "price not available";

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      .itemCards || [];


  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              <h3>{item.card.info.name}</h3>
              <p>
                ₹{item.card.info.price ? item.card.info.price / 100 : "N/A"}
              </p>
            </li>
          ))
        ) : (
          <li>
            <h3>No items available</h3>
            <p>Please check back later.</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
