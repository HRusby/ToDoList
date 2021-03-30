import React, { Component } from "react"
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
    constructor(props) {
        super()
        console.log(props)
        this.state = {
            loading: false,
            listId: props.listId,
            todos: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted,
                    }
                }
                return todo
            })
            return {
                ...prevState,
                todos: updatedTodos,
            }
        })
    }

    componentDidMount() {
        this.setState(prevState => {
            return { ...prevState, loading: true }
        })

        fetch(
            'https://localhost:5001/ToDoList/GetAllListItemsForListId',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.listId)
            })
            .then(response => response.json())
            .then(data => this.setState(prevState => { return { ...prevState, loading: false, todos: data } }))
    }

    render() {
        const mainStyles = {
            margin: 'auto',
            width: '50%',
        }
        const ToDos = this.state.todos.map((item) => (
            <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
        ))
        const content = this.state.loading ? <p>loading</p> : ToDos
        return <div style={mainStyles}>{content}</div>
    }
}

export default ToDoList