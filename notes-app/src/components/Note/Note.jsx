import "./note.scss";
import { useSelector, useDispatch } from "react-redux";
import { destroy } from "../../redux/notes/notesSlice";
let filtered;

function Note() {
  const notes = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.notes.activeFilter);

  filtered = notes.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div className="notes">
      {
        filtered.map((item, index) => {
          return (
            <div key={index} className={`${item.color} card-body`}>
              <a
                className="close-btn"
                onClick={() => dispatch(destroy(item.id))}
              >X</a>
              <p className="noteTitle">{item.title}</p>
              <p className="note-desc">{item.note}</p>
            </div>
          )
        })
      }
    </div >
  )
}

export default Note;