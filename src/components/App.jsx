import { useState, useEffect } from 'react'
import './App.css'

import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'
import FilterButtons from './FilterButtons'

function App() {

  const [allTasks, setAllTasks] = useState(() => {
    const savedTasks = localStorage.getItem('taskList');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  

  const [filteredTasks, setFilteredTasks] = useState([]);

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    switch (filter) {
      case 'active':
        setFilteredTasks(allTasks.filter(task => !task.completed));
        break;
      case 'completed':
        setFilteredTasks(allTasks.filter(task => task.completed));
        break;
      default:
        setFilteredTasks([...allTasks]);
    }
  }, [allTasks, filter]);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(allTasks));
  }, [allTasks]);

  const addTask = (value) => {
    setAllTasks([...allTasks, {
      id: Date.now(),
      text: value,
      completed: false
    }]);
  };

  const deleteTask = (id) => {
    setAllTasks(allTasks.filter(task => task.id !== id));
  };

  const toggleTaskStatus = (id) => {
    setAllTasks(
      allTasks.map(task => 
        task.id === id ? {...task, completed: !task.completed} : task
      ).sort(task => task.completed ? 1 : -1)
    );
  };

  return (
    <>
      <AddTaskForm addTask={addTask}/>
      <FilterButtons 
        onShowAll={() => setFilter('all')}
        onShowActive={() => setFilter('active')}
        onShowCompleted={() => setFilter('completed')}
      />
      <TaskList 
        tasks={filteredTasks} 
        deleteTask={deleteTask} 
        toggleTaskStatus={toggleTaskStatus}
      />
    </>
  );
}

export default App
