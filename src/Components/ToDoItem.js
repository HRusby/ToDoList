import React from "react";

class ToDoItem extends React.Component {

    constructor(props) {
        super()
        this.state = {
            item: props.item,
            isTextEditable: false,
            handleChange: props.handleChange
        }

        this.handleInput = this.handleInput.bind(this)
        this.submitState = this.submitState.bind(this)
        this.toggleTextEditable = this.toggleTextEditable.bind(this)
    }

    submitState() {
        console.log(this.state.item)
        fetch("https://localhost:5001/ToDoList/UpdateSpecificListItem",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.item)
            }
        )
    }

    handleInput(event) {
        var item = this.state.item
        const { name, checked, value } = event.target
        if (name === "isCompleted") {
            item = { ...item, isCompleted: checked }
        }
        else if (name === "itemText") {
            item = { ...item, text: value }
            this.toggleTextEditable()
        }

        if (item !== this.state.item) {
            this.setState(prevState => {
                return {
                    ...prevState,
                    item: item
                }
            })
        }
    }

    toggleTextEditable() {
        console.log('Make Text Editable')
        this.setState(prevState => { return { ...prevState, isTextEditable: !prevState.isTextEditable } })
    }

    componentWillUnmount() {
        // Save list if closed
        this.submitState();
    }

    render() {
        const textDisplay = this.state.isTextEditable
            ? <input
                type="text"
                name="itemText"
                value={this.state.item.text}
                onChange={this.handleInput}
                onBlur={this.submitState} />
            : <span
                className={this.state.item.isCompleted ? "completedToDoText" : null}
                onDoubleClick={this.toggleTextEditable} >
                {this.state.item.text}
            </span>

        return (
            <form className="ToDoItem" >
                <input
                    type="checkbox"
                    name="isCompleted"
                    checked={this.state.item.isCompleted}
                    onChange={this.handleInput}
                    onBlur={this.submitState} />
                {textDisplay}
            </form>
        )
    }
}
export default ToDoItem;