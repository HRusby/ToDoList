import React from 'react'
import ToDoList from './ToDoList'
import ListMenu from './ListMenu'
import ConfigData from '../Config/config.json'

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
    this.addNewList = this.addNewList.bind(this)
    this.deleteList = this.deleteList.bind(this)
  }

  closeList() {
    this.setState(prevState => { return { ...prevState, showMenu: true } })
  }

  selectList(list) {
    this.setState(prevState => { return { ...prevState, showMenu: false, selectedList: list } })
  }

  addNewList(listName) {
    fetch(ConfigData.backendUrl + "ToDoList/AddNewList",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ listName: listName, userId: 1 })
      })
      .then(resp => resp.json())
      .then(newList =>
        this.setState(prevState => {
          return {
            ...prevState,
            lists: prevState.lists.concat(newList)
          }
        })
      )
  }

  deleteList(listId) {
    fetch(ConfigData.backendUrl + "ToDoList/DeleteList",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ listId: listId, userId: 1 })
      })
      .then(resp => resp.json())
      .then(rowsDeleted =>
        this.setState(prevState => {
          return {
            ...prevState,
            lists: prevState.lists.filter(list => list.listId !== listId)
          }
        }, alert('List Deleted including ' + (rowsDeleted - 1) + ' ToDoItems.'))
      )
  }

  componentDidMount() {
    // Load all lists for User
    this.setState(prevState => {
      return { ...prevState, loading: true }
    })

    fetch(ConfigData.backendUrl + 'ToDoList/GetAllListsForUser',
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
      ? <ListMenu
        lists={this.state.lists}
        selectList={this.selectList}
        addNewList={this.addNewList}
        deleteList={this.deleteList} />
      : <ToDoList
        list={this.state.selectedList}
        closeList={this.closeList} />
    return <main>
      {this.state.loading ? <p>loading...</p> : listOrMenu}
    </main>
  }
}

export default MainContent
