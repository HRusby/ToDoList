import React, { Component } from "react"
import ToDoItem from './ToDoItem'
import '../css/ToDoList.css'

class ToDoList extends Component {
    constructor(props) {
        super()
        this.state = {
            loading: false,
            list: props.list,
            todos: [],
            closeList: props.closeList
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
                body: JSON.stringify(this.state.list.listId)
            })
            .then(response => response.json())
            .then(data => this.setState(prevState => { return { ...prevState, loading: false, todos: data } }))
    }

    render() {
        const ToDos = this.state.todos.map((item) => (
            <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
        ))
        const content = this.state.loading
            ? <p>loading...</p>
            : ToDos
        return (
            <div className="ToDoList">
                <div className='toDoListHeader'>
                    <h1 className='listName'>{this.state.list.listName}</h1>
                    <div className='close' onClick={this.state.closeList} />
                </div>
                <div className='toDoListContent'>
                    {content}
                </div>
            </div>)
    }
}

export default ToDoList