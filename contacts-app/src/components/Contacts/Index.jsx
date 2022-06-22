import Form from './Form';
import List from './List';
import "./style.scss";

function Contacts() {
    return (
        <div id='container'>
            <h1>Contacts</h1>
            <List />
            <Form />
        </div>
    )
}

export default Contacts;