import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contactSlice";

function EditForm({ contact }) {
    const [name, setName] = useState(contact.name);
    const [phone, setPhone] = useState(contact.phone_number);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone) return false;
        dispatch(updateContact({
            id: contact.id,
            changes: { name, phone_number: phone },
        }));
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" id="focus"
                />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                <div className="btn">
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm;