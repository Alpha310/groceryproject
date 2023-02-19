
import LineItem from './LineItem';

function ItemList({items,handleCheck,handleDelete}) {
  return (
    <div>
      <ul>
        {items.map((item)=>(
            <LineItem item={item} key={item.id}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
            />
        ))}
    </ul>
    </div>
  )
}

export default ItemList
