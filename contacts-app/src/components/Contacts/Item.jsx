import { useDispatch } from 'react-redux'
import { deleteContact } from "../../redux/contactSlice";
import "./style.scss";

function Item({ item }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li>
      <span>{item.name}</span>
      <span>{item.phone_number}</span>
      <span className="deleteBtn" onClick={() => handleDelete(item.id)}>X</span>
    </li>
  )
}

export default Item