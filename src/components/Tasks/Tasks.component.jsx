import React, { useState, useEffect } from 'react';
import TaskItem from '../TaskItem/TaskItem.component';
import './Tasks.styles.scss';

const Tasks = () => {
    const [todos, setTodos] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [checked, setChecked] = useState(false);
    var i = 201;

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data));
    },[]);

    const handleTaskName = (e) => {
        setTaskName(e.target.value);
    }

    const handleChecked = (e) => {
        setChecked(e.target.checked);
    }

    const handleAddTask = () => {
        if(taskName === '') {
            return;
        }
        var taskComponent = {
            "userId": 100,
            "id": i,
            "title": taskName,
            "completed": checked
        };
        ++i;
        var arr = todos.slice();
        arr.push(taskComponent);
        setTodos(arr);
    }

    const handleDelete = (e) => {
        setTodos(todos.filter(todo => (
            todo.id != e.target.id
        )))
    }

    return (
        <div className="tasks-container">
            <div className="add-task-container">    
                <input className="item-name" type="text" name="item-name" placeholder="Enter Task Name" onChange={e => handleTaskName(e)} />
                <input className="item-completed" type="checkbox" defaultChecked={checked} onChange={e => handleChecked(e)} name="item-completed" />
                <button id="add-task-button" onClick={handleAddTask}>ADD TASK</button>
            </div>
            {
                todos.map(todo => (
                    <TaskItem
                        key={todo.id}
                        id={todo.id} 
                        text={todo.title} 
                        completed={todo.completed} 
                        handleDelete={handleDelete}
                    />
                ))
            }
        </div>
    );
}

export default Tasks;