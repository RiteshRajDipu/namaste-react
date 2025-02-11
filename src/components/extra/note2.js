import RestaurantCard from "../RestaurantCard";
import listData from "../../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(listData)
     
    useEffect(() => {
      fetchData()
    }, [] )

    const fetchData = async () => {
        try {
          const data = await fetch("https://api.unsplash.com/photos/random?count=5&client_id=6okddmI1hJKth7scqGGQKtL_tNSL2dvXVNOj2v6tRV8");
          const json = await data.json();
          const formattedData = json.map((item) => ({
            id: item.id,
            name: `Restaurant ${item.id}`,
            cuisines: "Cuisine Type",
            price: (Math.floor(Math.random() * 500) + 100).toFixed(0),
            star: Math.floor(Math.random() * 5) + 1,
            deliveryTime: `${Math.floor(Math.random() * 60) + 30} mins`,
            imageUrl: item.urls.small, // Use the Unsplash image URL
          }));
          setListOfRestaurants(formattedData);
        } catch (error) {
          console.error("Failed to fetch data: ", error);
        }
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
