import React from 'react';
import Todo from './todo';

const ToDoList = ({todos, todo, setTodos}) => {
    return (
<div className='todo-container'>
<ul className='todo-list'>
    {todos.map((todo) => (
       <Todo 
       setTodos={setTodos}
       todos = {todos}
       todo={todo}
       key={todo.id} 
       text={todo.text} />
    ))}
</ul>
</div>
    );
}

export default ToDoList