import { useSelector, useDispatch } from "react-redux";
import { contactSelectors, removeAll } from "../../redux/contactSlice";
import Item from "./Item";
import "./style.scss";

function List() {
	const contacts = useSelector(contactSelectors.selectAll);
	const dispatch = useDispatch();

	const handleRemoveAll = () => {
		if (window.confirm("Are you sure?")) {
			dispatch(removeAll());
		}
	}
	return (
		<div>
			<p className="deleteAll" onClick={handleRemoveAll}>Delete All</p>
			<ul className="list">
				{contacts.map((contact) => (
					<Item key={contact.id} item={contact} />
				))}
			</ul>
		</div>
	);
}

export default List;
