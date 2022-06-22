import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/contactSlice";
import "./style.scss";

function Form() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !phone) return false;
		dispatch(addContact({ id: nanoid(), name: name, phone_number: phone }));
		setName("");
		setPhone("");
		document.getElementById("focus").focus();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" id="focus"
				/>
				<input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
				<div className="btn">
					<button type="submit">Add</button> 
				</div>
			</form>
		</div>
	);
}

export default Form;
