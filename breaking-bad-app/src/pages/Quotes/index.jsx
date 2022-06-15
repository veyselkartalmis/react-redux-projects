import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	fetchAllQuotes,
	quotesSelector,
	statusSelector,
	errorSelector,
} from "../../redux/quotesSlice";

import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Item from "./Item";

function Qutoes() {
	const dispatch = useDispatch();
	const data = useSelector(quotesSelector);
	const status = useSelector(statusSelector);
	const error = useSelector(errorSelector);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchAllQuotes());
		}
	}, [dispatch, status]);

	if (error) {
		return <Error message={error} />;
	}

	return (
		<div style={{ padding: 25 }}>
			<h1>Quotes</h1>
			{status === "loading" && <Loading />}
			{status === "succeeded" &&
				data.map((item) => <Item key={item.quote_id} item={item} />)}
			<br />
			{status === "succeeded" && (
				<div style={{ textAlign: "center", fontSize: "24px" }}>
					{data.length} quotes.
				</div>
			)}
		</div>
	);
}

export default Qutoes;
