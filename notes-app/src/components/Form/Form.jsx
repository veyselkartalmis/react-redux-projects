import "./form.scss";

function Form() {
	return (
		<div>
			<form action="">
				<div className="form-group">
					<label>Title:</label>
					<input type="text" />
				</div>
				<div className="form-group">
					<label>Note:</label>
					<textarea type="text" />
				</div>
				<div className="form-group">
					<label>Color:</label>
					<div className="button-group">
						<button type="button" className="black"></button>
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
