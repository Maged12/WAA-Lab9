import { Todo } from '../App';
import './index.css';

export default function Footer(props: { todos: Todo[]; deleteAllFinished: () => void; toggleAll: (isChecked: boolean) => void; }) {
    const { todos, deleteAllFinished, toggleAll } = props;
    const finishedCount = todos.filter(todo => todo.completed).length;
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={(e) => toggleAll(e.target.checked)} />
            </label>
            <span>
                <span>Finished {finishedCount}</span> / total {todos.length}
            </span>
            <button className="btn btn-danger" onClick={deleteAllFinished}>Delete Finished Tasks</button>
        </div>
    );
}