import React from 'react'
import ToDoItem from './ToDoItem'
import ToDoSamples from '../SampleData/ToDoItems'

class MainContent extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      todos: ToDoSamples,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState((prevState) => {
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
        todos: updatedTodos,
      }
    })
  }

  componentDidMount() {
    this.setState((prevState) => {
      return { ...prevState, loading: true }
    })

    fetch(
      'https://localhost:5001/ToDoList/GetAllListItemsForListId',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify('1')
      })
      .then(response => response.json())
      .then(data => this.setState({ loading: false, todos: data }))
      .then(x => console.log(this.state))
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
    return <main style={mainStyles}>{content}</main>
  }
}

export default MainContent
