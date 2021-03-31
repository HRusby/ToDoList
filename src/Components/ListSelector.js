import React from "react"

function ListSelector(props) {
    return (<span className='ListSelector' onClick={() => props.selectList(props.list.listId)}>
        {props.list.listName}
    </span>)
}

export default ListSelector

