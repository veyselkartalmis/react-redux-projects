import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactSlice";

function List() {
	const contacts = useSelector(contactSelectors.selectAll);
	const total = useSelector(contactSelectors.selectTotal);

	return (
		<div>
			{contacts.map((contact) => (
				<Item item={contact} />
			))}
		</div>
	);
}

export default List;
