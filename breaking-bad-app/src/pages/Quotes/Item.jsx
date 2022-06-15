import React from "react";
import "./style.css";

function Item({ item }) {
	return (
		<div className="quote-item">
			<q>{item.quote}</q> <strong>{item.author}</strong>
		</div>
	);
}

export default Item;
