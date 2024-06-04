import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
  const newTask = { ...task, id: tasks.length + 1 };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (

    <Container>
      <Row>
        <Col xs={12} md={6} className="my-4">
          <h1 className="text-center">Task Tracker</h1>
          <AddTaskForm addTask={addTask} />
        </Col>
        <Col xs={12} md={6} className="my-4">
          <h2 className="text-center">Tasks</h2>
          <TaskList tasks={tasks} removeTask={removeTask} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
