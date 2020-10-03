import React from 'react';

const abc = (event) => { event.preventDefault(); alert('unko'); return false; }

class TodoAdder extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.props.sendTask(document.getElementById('newTask').value);
        document.getElementById('newTask').value = '';
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleClick();
        return false;
    } 

    render() {
        return (
            <form className='form-group d-flex flex-row justify-content-around' onSubmit={this.handleSubmit}>
                    <input type='text' className='form-control form-control-lg' placeholder='Enter your todo' id='newTask'></input>
                    <button type='button' className='btn btn-outline-primary text-nowrap' onClick={this.handleClick}>追加</button>
            </form>
        )
    }
}

export default TodoAdder;