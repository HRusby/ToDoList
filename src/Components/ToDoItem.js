import React from "react";

function ToDoItem(props) {
    return (
        <div className="ToDoItem">
            <input type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)} />
            <p className={props.item.completed ? "completedToDoText" : null}>{props.item.text}</p>
        </div>
    )
}
export default ToDoItem;