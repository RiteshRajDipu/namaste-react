import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const {resInfo, error} = useRestaurantMenu(restId);

  if (error) return <p>Error loading menu: {error}</p>;
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
