import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactSlice";
import Form from './Form';
import List from './List';
import "./style.scss";

function Contacts() {
    const total = useSelector(contactSelectors.selectTotal);
    return (
        <div id='container'>
            <h1>Contacts ({total})</h1>
            <List />
            <Form />
        </div>
    )
}

export default Contacts;