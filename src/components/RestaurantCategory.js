import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {

    if (!data || !data.itemCards || data.itemCards.length === 0) {
        return (
            <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg flex justify-between">
                <span className="font-bold text-lg">
                    {data.title || data.type || data.completeAddress}
                </span>
            </div>
        );
    }

   const handleClick = () => {
     setShowIndex();
   };
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg">
            <div className="flex justify-between cursor-pointer"
             onClick={handleClick}
            >
                <span className="font-bold text-lg">
                    {data.title} ({data.itemCards.length})
                </span>
                <span>⬇️</span>
            </div>
           {showItems && <ItemList items={data.itemCards} /> }
        </div>
    );
};

export default RestaurantCategory;
