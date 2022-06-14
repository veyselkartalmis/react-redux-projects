import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {fetchAllQuotes} from "../../redux/quotesSlice";

function Qutoes() {
    const data = useSelector((state) => state.quotes.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllQuotes());
    }, [dispatch]);

	return <div>Qutoes</div>;
}

export default Qutoes;
