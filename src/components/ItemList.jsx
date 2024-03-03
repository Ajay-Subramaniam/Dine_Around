
const ItemList = (props) => {
  console.log('inside ItemList');

    const {item}=props
    // console.log(item);
  return (
    <>
      <div>{item.card.info.name}-Rs.{item.card.info.price/100}</div> 
      <div>{item.card.info.description}</div>
      <br/>
    </>
  )
}

export default ItemList