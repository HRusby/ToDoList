import React from 'react'
import ToDoList from './ToDoList'

class MainContent extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      userId: 1,
      listIds: []
    }
  }

  componentDidMount() {
    // Load all lists for User
    this.setState(prevState => {
      return { ...prevState, loading: true }
    })

    fetch(
      'https://localhost:5001/ToDoList/GetAllListsForUser',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.userId)
      })
      .then(response => response.json())
      .then(d => console.log(d))
      .then(data => this.setState(prevState => { return { ...prevState, loading: false, listIds: data } }))
      .then(x => console.log(this.state))
  }

  render() {
    // Display Lists if one not picked else display that list

    return <main>
      <ToDoList listId='1' />
    </main>
  }
}

export default MainContent
