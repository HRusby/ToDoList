import React from "react";

class ToDoItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isTextEditable: false
        }

        this.handleInput = this.handleInput.bind(this)
        this.toggleTextEditable = this.toggleTextEditable.bind(this)
    }

    handleInput(event) {
        this.props.handleChange(this.props.item.id, event)
    }

    toggleTextEditable() {
        this.setState(prevState => { return { ...prevState, isTextEditable: !prevState.isTextEditable } })
    }

    render() {
        const textDisplay = this.state.isTextEditable
            ? <input
                type="text"
                name="text"
                defaultValue={this.props.item.text}
                onBlur={(event) => { this.handleInput(event); this.toggleTextEditable() }} />
            : <span
                className={this.props.item.isCompleted ? "completedToDoText" : null}
                onClick={this.toggleTextEditable} >
                {this.props.item.text}
            </span>

        return (
            <form className="ToDoItem" onSubmit={e => { e.preventDefault(); }}>
                <input
                    type="checkbox"
                    name="isCompleted"
                    checked={this.props.item.isCompleted}
                    onChange={this.handleInput} />
                {textDisplay}
                <i onClick={() => this.props.deleteItem(this.props.item.id)}
                    className="material-icons deleteItem">delete</i>
            </form>
        )
    }
}
export default ToDoItem;