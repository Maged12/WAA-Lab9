import { Todo } from "../App";
import Item from "../Item";
import "./index.css";

export default function List(props: {
    todos: Todo[];
    updateTodo: (id: number, done: boolean) => void;
    deleteTodo: (id: number) => void;
}
) {
    const { todos, updateTodo, deleteTodo } = props;
    return (
        <ul className="todo-main">
            {todos.map((todo) => <Item key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)}
        </ul>
    );
}