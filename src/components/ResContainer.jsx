import { useEffect, useState } from "react";
import ResCard from "./ResCard";

const ResContainer = () =>{
  console.log('inside ResContainer');


    const [restaurants,setRestaurants] = useState([]);
    const [list,setList] = useState([]);
    const [searchText,setSearchText] = useState('');

    useEffect(() => {
        fetchData();
      }, [])
    

    const fetchData = async () => {
    
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
            const json= await data.json();
              console.log(json);
            // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      }

      const topRestaurants = () =>{
            const result = restaurants.filter((res)=>{
                 return res.info.avgRating > 4.5
             })
        setList(result)
      }

      const searchRestaurants = (value) =>{
        console.log('search text',searchText);
           const result = restaurants.filter((res) =>{
                const resName = res.info.name.toLowerCase()
               return resName.includes(value.toLowerCase())
           })
           setList(result)
      }

    //   console.log('===>render');

      const updateSearchText = (e) =>{
        console.log("curr value",e.target.value);
        setSearchText(e.target.value)
        searchRestaurants(e.target.value)
      }

      if(restaurants.length===0){
            return(
                <div>Loading...</div>
            )
      }
      else{
        return(
            <>
                <div>
                    <input value={searchText} onChange={updateSearchText}/>
                    <button onClick={searchRestaurants}>Search</button>
                    <button onClick={topRestaurants}>Top Restaurants</button>
                </div>
                <div className="restaurant-container">
                    {list.map(res => {          
                        return <ResCard key={res.info.id} restaurant={res.info}/>
                    })}
                </div>
            </>
        )
        }
}

export default ResContainer;