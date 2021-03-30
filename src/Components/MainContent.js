import React from 'react'
import ToDoList from './ToDoList'

class MainContent extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <main>
      <ToDoList listId='1' />
    </main>
  }
}

export default MainContent
