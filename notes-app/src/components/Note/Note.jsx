import "./note.scss";
import { useSelector, useDispatch } from "react-redux";
import { destroy } from "../../redux/notes/notesSlice";

function Note() {
  const notes = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();

  return (
    <div className="notes">
      {
        notes.map((item, index) => {
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