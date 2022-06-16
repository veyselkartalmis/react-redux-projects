import { useParams } from "react-router-dom";

function QuotesDetail() {
	const { quote_id } = useParams();
	return <div>QuotesDetail</div>;
}

export default QuotesDetail;
