import React from 'react';
import './TaskItem.styles.scss';

const TaskItem = ({ id, text, completed, handleDelete }) => (
    <div className="task-item-container">
        <div className="task-name">
            <h2>{text}</h2>
        </div>
        <div className="task-completed">
            <h2>{completed ? 'True' : 'False'}</h2>
        </div>
        <div className="delete-button-container">
            <button id={id} className="delete-button" onClick={e => handleDelete(e)}>Delete</button>
        </div>
    </div>
);

export default TaskItem;