
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines, 
        costForTwo,
        sla
    } = restData?.info;
  
    return (
        <div
        // data-testid = "resCard" 
        className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
                <img 
                className="rounded-lg"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
                 />
                <h3 className="font-bold py-4 text-lg">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>Rs.{costForTwo}</h4>
                <h4>{sla?.slaString}</h4>
        </div>
    );
};

export const withOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-1 rounded-lg">Rajiv Chock - CP</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}


export default RestaurantCard;