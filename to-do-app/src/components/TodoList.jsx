import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/todo/todoSlice";

function TodoList() {
    const items = useSelector(state => state.todos.items);
    const dispatch = useDispatch();

    return (
        <ul className="todo-list">
            {
                items.map((item) => (
                    <li key={item.id} className={item.completed ? "completed" : ""}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => dispatch(toggle({ id: item.id }))}
                            />
                            <label>{item.title}</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList