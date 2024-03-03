import { Link } from "react-router-dom"

const ResCard = (props) =>{
    const { restaurant } = props
    console.log('inside Rescard');
    // console.log(restaurant);
    return(
        <Link to={'restaurant/'+restaurant.id} className="restaurant-card">
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.cloudinaryImageId}/>
          <div>{restaurant.name}</div>
          <div>{restaurant.avgRatingString} | {restaurant.costForTwo}</div>
          <div>{restaurant.cuisines.join(', ')}</div>
          <div>{restaurant.areaName}</div>
          </Link>
    )
}

export default ResCard

