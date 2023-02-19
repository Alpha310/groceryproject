import {FaTrashAlt} from 'react-icons/fa';

function LineItem({item,handleCheck,handleDelete}) {
  return (
    <div>
      <li className="item" key={item.id}> 
                <input 
                     type="checkbox"
                     onChange={()=>handleCheck(item.id)}
                     checked={item.checked}/>
                 <label 
                 style={(item.checked)?{textDecoration:'line-through'}:item}
                 onDoubleClick={()=>{handleCheck(item.id)}}>{item.item}</label>
                 <FaTrashAlt 
                 onClick={()=>handleDelete(item.id)}
                 role= "button" tabIndex='0'
                    aria-label={`Delete ${item.item}`}
                 />   
            </li>
    </div>
  )
}

export default LineItem
