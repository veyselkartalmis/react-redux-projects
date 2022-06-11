import "./note.scss";
import { useSelector } from "react-redux";

function Note() {
  const notes = useSelector((state) => state.notes.items);

  return (
    <div className="notes">
      {
        notes.map((item, index) => {
          return (
            <div key={index} className={`${item.color} card-body`}>
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