import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoSamples from "../SampleData/ToDoItems";

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: ToDoSamples
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const mainStyles = {
            margin: "auto",
            width: "50%"
        }
        const ToDos = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />);
        return (
            <main style={mainStyles} >
                { ToDos}
            </main>
        );
    }
}

export default MainContent;