import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { quotesSelector } from "../../redux/quotesSlice";

function QuotesDetail() {
	const { quote_id } = useParams();
	const items = useSelector(quotesSelector);
	const quote = items.find((item) => item.quote_id === Number(quote_id));

	if (!quote) {
		return <Navigate path="/quotes" />;
	}

	return (
		<div>
			<h1>QuotesDetail</h1>
			{<pre>{JSON.stringify(quote, null, 2)}</pre>}
		</div>
	);
}

export default QuotesDetail;
