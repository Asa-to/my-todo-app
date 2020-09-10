import React from 'react';

class TodoAdder extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.sendTask(document.getElementById('newTask').value);
        document.getElementById('newTask').value = '';
    }

    render() {
        return (
            <div class='form-group d-flex flex-row justify-content-around'>
                <input type='text' class='form-control form-control-lg' placeholder='Enter your todo' id='newTask'></input>
                <button type='button' class='btn btn-outline-primary text-nowrap' onClick={this.handleClick}>追加</button>
            </div>
        )
    }
}

export default TodoAdder;