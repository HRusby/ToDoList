import React from "react";
import ListSelector from "./ListSelector"
import '../css/ListMenu.css'
import NewToDoItem from "./NewToDoItem";

function ListMenu(props) {
    var Lists = []
    if (props.lists !== undefined) {
        Lists = props.lists.map((item) => (
            <ListSelector
                key={item.listId}
                list={item}
                selectList={props.selectList}
                deleteList={props.deleteList} />
        ))
    }
    return (
        <div className='listMenu'>
            <h1>Select a List</h1>
            {Lists}
            <NewToDoItem addItem={props.addNewList} />
        </div>
    )
}

export default ListMenu