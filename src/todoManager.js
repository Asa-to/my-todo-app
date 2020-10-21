import React from 'react';
import TodoAdder from './todoAdder';
import TodoViewer from './todoViewer';

class TodoManager extends React.Component {
    constructor(props){
        super(props);
        this.state = {tasks: [], adding: false};
        this.updateTasks = this.updateTasks.bind(this);
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.updateTasks();
    }

    updateTasks() {
        fetch(`/__api`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            this.setState({tasks: JSON.parse(result)})
        });
    }

    addTask(task){
        if(task){
            this.setState({adding: true});
            document.getElementById('newTask').value = '';
            const newTasks = this.state.tasks;
            newTasks.push({id: '', name: task});
            this.setState({task: newTasks});
            console.log((newTasks));
            console.log(JSON.stringify({'name': task}));
            fetch('/__api',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({'name': task})
            })
            .then(response => response.json())
            .then((result) => {
                newTasks[newTasks.length-1].id = JSON.parse(result).lastID;
                this.setState({task: newTasks, adding: false});
            });
        }
    }
    
    removeTask(id){
        fetch('/__api/', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        });
        const tasks = this.state.tasks;
        const index = this.state.tasks.findIndex(element => element.id.toString() === id);
        if(-1 < index){
            tasks.splice(index,1);
            this.setState({tasks});
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Todo App</h5>
                    <TodoAdder sendTask={this.addTask} adding={this.state.adding}/>
                    <TodoViewer tasks={this.state.tasks} removeTask={this.removeTask}/>
                </div>
            </div>
        )
    }
}

export default TodoManager;