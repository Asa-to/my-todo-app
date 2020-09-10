import React from 'react';

class TodoViewer extends React.Component {
    constructor(props) {
        super(props);
        this.getList = this.getList.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.removeTask(e.target.id);
    }

    getList(){
        return (
            <ul class="list-group">
                {this.props.tasks.map((item, index) => 
                    item ? 
                        <li key={index} class="d-flex flex-row justify-content-around">
                            <span class='list-group-item w-100 text-truncate'>{item}</span>
                            <button type='button' id={index} class='btn btn-outline-primary text-nowrap ' onClick={this.handleClick}>削除</button>
                        </li>
                    : null
                )}
            </ul>
        );
    }

    render() {
        return (
            <div>
                {this.getList()}
            </div>
        )
    }
}

export default TodoViewer;