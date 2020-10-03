import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoManager from './todoManager';

const element = (
    <div className='container py-5'>
        <TodoManager />
    </div>
)

ReactDOM.render(element, document.getElementById('root'));