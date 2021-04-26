import React, { useState } from 'react';
//import data from "./components/data.json";
import Data from "./components/Data.js";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from './components/ToDoForm';
//import Edit from './components/Edit';

function App() {

    const [toDoList, setToDoList] = useState(Data);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
        });
        setToDoList(mapped);
    }

    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
        });
        setToDoList(filtered);
    }

    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
    }

    return (
        <div className="App">
            <Header />
            <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
            {/* <Edit /> */}
            <ToDoForm addTask={addTask} />
        </div>
    );
}

export default App;
