import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { contactSelectors } from '../../redux/contactSlice';
import EditForm from './EditForm';

function Edit() {
    const { id } = useParams();
    const contact = useSelector(state => contactSelectors.selectById(state, id));

    return (
        <div>
            <h1>Edit</h1>
            <EditForm contact={contact} />
        </div>
    )
}

export default Edit;