import { FaTrashAlt } from "react-icons/fa";
import { handleCheck, handleDelete } from "../utils";

const LineItem = ({ item, items, setItems }) => (
  <li className="item">
    <input type="checkbox" onChange={() => handleCheck(item.id, items,setItems)} checked={item.checked}/>
    <label
      style={item.checked ? { textDecoration: "line-through" } : null}
      onDoubleClick={() => handleCheck(item.id, items, setItems)}
    >
      {item.item}
    </label>
    <FaTrashAlt
      onClick={() => handleDelete(item.id, items, setItems)}
      role="button"
      tabIndex="0"
      aria-label={`Delete ${item.item}`}
    />
  </li>
);

export default LineItem;