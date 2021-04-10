import React from "react"

function ListSelector(props) {
    return (<div className='ListSelector'>
        <span className="listName" onClick={() => props.selectList(props.list)}>
            {props.list.listName}
        </span>
        <i onClick={() => props.deleteList(props.list.listId)}
            className="material-icons deleteList" >delete</i>
    </div>)
}

export default ListSelector