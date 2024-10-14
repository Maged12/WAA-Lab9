import { Todo } from '../App';
import './index.css';

export default function Item(props: {
    todo: Todo;
    updateTodo: (id: number, done: boolean) => void;
    deleteTodo: (id: number) => void;
}) {

    const { todo, updateTodo, deleteTodo } = props;
    return (
        <li>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={(e) =>
                    updateTodo(todo.id, !todo.completed)
                } />
                <span>{todo.name}</span>
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}