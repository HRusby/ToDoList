import React from "react";

function ToDoItem(props) {
    return (
        <div className="ToDoItem">
            <input type="checkbox"
                checked={props.item.isCompleted}
                onChange={() => props.handleChange(props.item.id)} />
            <span className={props.item.isCompleted ? "completedToDoText" : null}>{props.item.text}</span>
        </div>
    )
}
export default ToDoItem;