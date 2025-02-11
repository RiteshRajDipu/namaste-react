import RestaurantCard from "../RestaurantCard";
import listData from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    console.log("Body Rendered")
     
    useEffect(() => {
      fetchData()
    }, [] )

    const fetchData = async () => {
        try {
          const data = await fetch("https://api.unsplash.com/photos/random?count=5&client_id=6okddmI1hJKth7scqGGQKtL_tNSL2dvXVNOj2v6tRV8");
          const json = await data.json();
          console.log(json);
          const formattedData = json.map((item) => ({
            id: item.id,
            name: `Restaurant ${item.id}`,
            cuisines: "Cuisine Type",
            price: (Math.floor(Math.random() * 500) + 100).toFixed(0),
            star: Math.floor(Math.random() * 5) + 1,
            deliveryTime: `${Math.floor(Math.random() * 60) + 30} mins`,
            imageUrl: item.urls.small,
          }));
          setListOfRestaurants(formattedData);
          setFilteredRestaurants(formattedData);
        } catch (error) {
          console.error("Failed to fetch data: ", error);
        }
      };   
      
  
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div>
            <input 
            value={searchText}
            onChange={(e) => {setSearchText(e.target.value)
            }}
            type="text" 
            placeholder="Search for restaurent"
             />
            <button
               onClick={() => {
                const filteredList = listOfRestaurants.filter((res) =>
                  res.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredList);
              }}
            >
                Search</button>
        </div>
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.star > 4);
            setFilteredRestaurants(filteredList);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
