import React from "react"

class NewToDoItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            itemText: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ itemText: event.target.value })
    }

    handleSubmit(event) {
        this.props.addItem(this.state.itemText)
    }

    render() {
        return (
            <form
                className="ToDoItem"
                onSubmit={e => { e.preventDefault(); this.handleSubmit(e) }}>
                <input type="checkbox" disabled />
                <input
                    type="text"
                    placeholder="New Task..."
                    defaultValue={this.state.itemText}
                    onChange={this.handleChange} />
            </form>
        )
    }
}

export default NewToDoItem;