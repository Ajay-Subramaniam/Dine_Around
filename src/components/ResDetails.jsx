import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCategory from './ItemCategory';
import useResDetails from '../utils/useResDetails';

const ResDetails = () => {
    console.log('inside ResDetails');

    const {resId} =useParams();
    
    const [ details,categories] = useResDetails(resId);

    console.log('1');
    console.log('---------------');
    console.log('2');
    
    if(Object.keys(details).length===0){
      return (
        <div>Loding...</div>
      )
    }
    else{
      return (
        <div>
          <h2>{details.name}</h2>
          <h2>{details.cuisines.join(', ')}</h2>
          <h2>{details.areaName}</h2>
          <div className='category-container'>
            {categories.map((category)=>{
              return <ItemCategory key={category.card.card.title} category={category}/>
            })}
          </div>
        </div>
      )
    }
}

export default ResDetails