import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  
  const [showIndex, setShowIndex] = useState(null)

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

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => 
       c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
    // || "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" 
  );

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-xl">{name}</h1>
      <p className="font-bold text-base">
        {cuisines} - {costForTwoMessage}
      </p>
      {/* categories accordian */}
      {categories.map((category, index) => 
         <RestaurantCategory 
         key={index}  
         data={category?.card?.card}
         showItems={index === showIndex ? true : false }
         setShowIndex={() => setShowIndex(index)}
         />  
         )}
    </div>
  );
};

export default RestaurantMenu;

{/* <h2>Menu</h2>
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
</ul> */}
