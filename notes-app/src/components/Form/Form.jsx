import "./form.scss";
import { addNote } from "../../redux/notes/notesSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
	const dispatch = useDispatch();
	const [title, setTitle] = useState();
	const [note, setNote] = useState();
	const [color, setColor] = useState("black");
	const [noteValid, setNoteValid] = useState(false);
	const [titleValid, setTitleValid] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		if (title.lenght === 0 && note.lenght === 0) {
			setTitleValid(false);
			setNoteValid(false);
			return;
		}
		if (title.lenght === 0) {
			setTitleValid(false);
			return;
		}
		if (note.lenght === 0) {
			setNoteValid(false);
			return;
		}

		dispatch(addNote({ id: nanoid(), title, note, color }));
		setTitle = "";
		setNote = "";
		setNoteValid(true);
		setTitleValid(true);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Title:</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder={titleValid == false ? "Bu alan boş geçilemez" : ""}
					/>
				</div>
				<div className="form-group">
					<label>Note:</label>
					<textarea
						type="text"
						value={note}
						onChange={(e) => setNote(e.target.value)}
						placeholder={noteValid == false ? "Bu alan boş geçilemez" : ""}
					/>
				</div>
				<div className="form-group">
					<label>Color:</label>
					<div className="button-group">
						<button
							type="button"
							className="black"
							onClick={(e) => setColor("black")}
						>{color === "black" ? "+" : ""}</button>
						<button
							type="button"
							className="cyan"
							onClick={(e) => setColor("cyan")}
						>{color === "cyan" ? "+" : ""}</button>
						<button
							type="button"
							className="purple"
							onClick={(e) => setColor("purple")}
						>{color === "purple" ? "+" : ""}</button>
						<button
							type="button"
							className="golden"
							onClick={(e) => setColor("golden")}
						>{color === "golden" ? "+" : ""} </button>
					</div>
				</div>
				<button type="submit" className="add-note">
					Add Note
				</button>
			</form>
		</div>
	);
}

export default Form;
