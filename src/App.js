import styled from 'styled-components';
import ToDoList from './components/todolist';
import Form from './components/Form';
import {BrowserRouter as Router} from 'react-router-dom'
import {useState} from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <>
    <header>
    <h1>
        Scheduel
    </h1>
    </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <ToDoList setTodos={setTodos} todos={todos} />
    </>

  );
}

export default App;
