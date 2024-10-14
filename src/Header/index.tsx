import { KeyboardEvent } from 'react';
import './index.css';


export default function Header(props: {
    setTodo: (name: string) => void;
}) {
    const keyUpHander = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.setTodo(e.currentTarget.value);
        }
    };

    return (
        <div className="todo-header">
            <input type="text" placeholder="Enter task name" onKeyUp={keyUpHander} />
        </div>
    );
}