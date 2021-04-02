import React from "react";
import ListSelector from "./ListSelector"
import '../css/ListMenu.css'

class ListMenu extends React.Component {
    constructor(props) {
        super()
        this.state = {
            lists: props.lists,
            selectList: props.selectList
        }
    }

    render() {
        var Lists = []
        if (this.state.lists !== undefined) {
            Lists = this.state.lists.map((item) => (
                <ListSelector key={item.listId} list={item} selectList={this.state.selectList} />
            ))
        }
        return (
            <div className='listMenu'>
                <h1>Select a List</h1>
                {Lists}
            </div>
        )
    }
}

export default ListMenu