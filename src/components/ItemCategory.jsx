import React from 'react'
import ItemList from './ItemList';

const ItemCategory = (props) => {
  console.log('inside ItemCategory');

    const {category} = props
    // console.log(category); 
  return (
    <div className='category-card'>
        <div className='category-card-title'>{category.card.card.title}</div>
        <br/>
        <div>
            {category.card.card.itemCards.map((item)=>{
                return <ItemList key={item.card.info.id} item={item}/>
            })}
        </div>
    </div>
  )
}

export default ItemCategory