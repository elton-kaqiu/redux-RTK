import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { TaskList } from './components/TaskList.jsx';
import { AddTask } from './components/AddTask.jsx';
import { Task } from './components/Task.jsx';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/add-task" element={<AddTask />} />
                    <Route path="/task/:taskId" element={<Task />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
