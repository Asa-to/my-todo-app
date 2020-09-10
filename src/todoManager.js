import React from 'react';
import TodoAdder from './todoAdder';
import TodoViewer from './todoViewer';

class TodoManager extends React.Component {
    constructor(props){
        super(props);
        this.state = {tasks: []};
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    addTask(task){
        if(task){
            const newTasks = [...this.state.tasks, task];
            this.setState({tasks: newTasks});
        }
    }
    
    removeTask(index){
        if(index < this.state.tasks.length){
            const newTasks = this.state.tasks.splice(index, 1);
            this.setState({tasls: newTasks});
        }
    }

    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title text-center">Todo App</h5>
                    <TodoAdder sendTask={this.addTask}/>
                    <TodoViewer tasks={this.state.tasks} removeTask={this.removeTask}/>
                </div>
            </div>
        )
    }
}

export default TodoManager;