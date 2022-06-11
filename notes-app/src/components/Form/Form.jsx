import "./form.scss";
import { addNote } from "../../redux/notes/notesSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { set } from "immer/dist/internal";

function Form() {
	const dispatch = useDispatch();
	const [title, setTitle] = useState();
	const [note, setNote] = useState();
	const [color, setColor] = useState();
	const [noteValid, setNoteValid] = useState();
	const [titleValid, setTitleValid] = useState();

	function handleSubmit(e) {
		e.preventDefault();
		if (title.lenght === 0 && note.lenght === 0) {
			setTitleValid(false);
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
			<form action="">
				<div className="form-group">
					<label>Title:</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Note:</label>
					<textarea
						type="text"
						value={note}
						onChange={(e) => setNote(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Color:</label>
					<div className="button-group">
						<button
							type="button"
							className="black"
							onClick={(e) => setColor("black")}
						></button>
						<button type="button" className="cyan"></button>
						<button type="button" className="purple"></button>
						<button type="button" className="golden"></button>
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
