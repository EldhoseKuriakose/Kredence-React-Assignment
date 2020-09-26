import React, { useState, useEffect } from 'react';
import TaskItem from '../TaskItem/TaskItem.component';

const Tasks = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() =>{
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data));
    },[]);

    const handleDelete = (e) => {
        setTodos(todos.filter(todo => (
            todo.id != e.target.id
        )))
    }

    return (
        <div className="tasks-container">
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