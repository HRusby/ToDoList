import React from "react"

function ListSelector(props) {
    return (<span>
        <span className='ListSelector' onClick={() => props.selectList(props.list)}>
            {props.list.listName}
        </span>
        <button onClick={() => props.deleteList(props.list.listId)}>Delete</button>
    </span>)
}

export default ListSelector

