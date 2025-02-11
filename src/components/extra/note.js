import RestaurantCard from "../RestaurantCard";
import listData from "../../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(listData)
     
    useEffect(() => {
      fetchData()
    }, [] )

    const fetchData = async () => {
          const data = await fetch(
            "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
      
          const json = await data.json();
          console.log(json);
          console.log(json.data.cards[7].card.card.brands);
          setListOfRestaurants(json.data.cards[7].card.card.brands);
      };
      
  
  return (
    <div className="body">
      <div className="filter">
        <button onClick={() => {
            setListOfRestaurants()
            const filteredList =  listOfRestaurants.filter((res) => res.star > 4);
            setListOfRestaurants(filteredList);
            console.log(filteredList);
        }}
         className="filter-btn">
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
