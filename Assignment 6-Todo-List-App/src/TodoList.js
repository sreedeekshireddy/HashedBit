import React, { useState } from 'react';
const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const handleAddTask = () => {
        if (task.trim()) {
            const newTasks = [...tasks, task].sort((a, b) => a.localeCompare(b));
            setTasks(newTasks);
            setTask('');
        }
    };
    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddTask();
        }
    };
    return (
        <div id="todo-container" style={{ textAlign: 'center', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
            <h1 id="todo-title">Todo List</h1>
            <div id="todo-input-group" style={{ marginBottom: '20px' }}>
                <input
                    id="todo-input"
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add a new task"
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }}
                />
                <button id="todo-add-button" onClick={handleAddTask} style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: 'lightgray', color: 'black', cursor: 'pointer' }}>
                    Add
                </button>
            </div>
            <ul id="todo-list" style={{ listStyle: 'none', padding: 0 }}>
                {tasks.map((task, index) => (
                    <li key={index} className="todo-item" style={{ margin: '10px 0' }}>
                        <span className="todo-task">{task}</span>
                        <button
                            className="todo-delete-button"
                            data-index={index}
                            onClick={() => handleDeleteTask(index)}
                            style={{ marginLeft: '10px', padding: '5px 10px', borderRadius: '5px', border: 'none', backgroundColor: 'lightgray', color: 'black', cursor: 'pointer' }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TodoList;
