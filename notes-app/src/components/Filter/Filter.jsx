import "./filter.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/notes/notesSlice";

function Filter() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(search(e.target.value));
    setTitle(e.target.value);
  }

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search.."
        value={title}
        onChange={handleChange}
      />
    </div>
  )
}

export default Filter;