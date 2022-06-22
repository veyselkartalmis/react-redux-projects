import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactSlice";
import Item from "./Item";
import "./style.scss";

function List() {
	const contacts = useSelector(contactSelectors.selectAll);
	// const total = useSelector(contactSelectors.selectTotal);

	return (
		<ul className="list">
			{contacts.map((contact) => (
				<Item key={contact.id} item={contact} />
			))}
		</ul>
	);
}

export default List;
