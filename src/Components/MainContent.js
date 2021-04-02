import React from 'react'
import ToDoList from './ToDoList'
import ListMenu from './ListMenu'

class MainContent extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      showMenu: true,
      userId: 1,
      lists: [],
      selectedList: 1
    }

    this.selectList = this.selectList.bind(this)
    this.closeList = this.closeList.bind(this)
  }

  closeList() {
    this.setState(prevState => { return { ...prevState, showMenu: true } })
  }

  selectList(list) {
    this.setState(prevState => { return { ...prevState, showMenu: false, selectedList: list } })
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
      .then(data => {
        this.setState(prevState => { return { ...prevState, loading: false, lists: data } })
      })
  }

  render() {
    // Display Lists if one not picked else display that list
    var listOrMenu = this.state.showMenu
      ? <ListMenu lists={this.state.lists} selectList={this.selectList} />
      : <ToDoList
        list={this.state.selectedList}
        closeList={this.closeList} />
    return <main>
      {this.state.loading ? <p>loading...</p> : listOrMenu}
    </main>
  }
}

export default MainContent
