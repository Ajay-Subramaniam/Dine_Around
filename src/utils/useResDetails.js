import { useEffect, useState } from "react";



const useResDetails = (resId) => {
    console.log('inside useResDetails');

    const [details,setDetails] =  useState({});
    const [categories,setCategories] = useState({})

useEffect(() => {
        fetchData();
    }, [])
    

const fetchData = async () => {
  
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId='+resId)
        const json= await data.json();
        // const path=json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
        console.log(json);
        const details = json.data.cards[0].card.card.info
        const categories = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
        setDetails(details);
        // console.log(categories);

        const filteredCategories = categories.filter((item)=>{
            return item.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        })
        setCategories(filteredCategories)

        
    }
    return [ details, categories] 
}

export default useResDetails
