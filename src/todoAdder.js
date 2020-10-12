import React from 'react';

class TodoAdder extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.props.sendTask(document.getElementById('newTask').value);
    }

    handleSubmit(event) {
        event.preventDefault();
        if(!this.props.adding) {
            this.handleClick();
        }
        return false;
    } 

    render() {
        return (
            <form className='form-group d-flex flex-row justify-content-around' onSubmit={this.handleSubmit}>
                    <input type='text' className='form-control form-control-lg' placeholder='Enter your todo' id='newTask'></input>
                    <button type='button' id="adder" className='btn btn-outline-primary text-nowrap' disabled={this.props.adding} onClick={this.handleClick}>追加</button>
            </form>
        )
    }
}

export default TodoAdder;