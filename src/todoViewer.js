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
            <ul className="list-group">
                {this.props.tasks.map((item, index) => {
                        // idがついていなければ削除ボタンを無効にする
                        return(
                            <li key={index} className="d-flex flex-row justify-content-around">
                                <span className='list-group-item w-100 text-truncate'>{item['name']}</span>
                                <button type='button' id={item.id} className='btn btn-outline-primary text-nowrap' disabled={!item.id} onClick={this.handleClick}>削除</button>
                            </li>
                        );
                    }
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