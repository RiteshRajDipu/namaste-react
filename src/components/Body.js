import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
     
    useEffect(() => {
      fetchData()
    }, [] )

    const fetchData = async () => {
          const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6134806&lng=77.2189594&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

          const json = await data.json();

          console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
          
          setListOfRestaurants(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );

        setFilteredRestaurants(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      };   
  
      const onlineStatus = useOnlineStatus();

     if(onlineStatus === false) 
      return (
      <h1>Looks like you are offline, Please check your internet connection.</h1>
      );

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input 
            type="text" 
            placeholder="Search for restaurent"
            value={searchText}
            onChange={(e) => {setSearchText(e.target.value)
            }}
             />
            <button
               onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredList);
              }}
            >
                Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}  
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link 
              key={restaurant.info.id}
               to={"/restaurants/"+restaurant.info.id}>
          <RestaurantCard  restData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
