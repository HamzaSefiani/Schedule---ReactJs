import React from 'react';

const Form = ({setInputText, inputText, todos, setTodos}) => {
    const InputTextHandler = (e) => {
        setInputText(e.target.value)
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
        
        setTodos([
            ...todos, {
                text:inputText, Done:false, id: Math.random()*1000
            }
        ]);
    };
    return (
        <form>
        <input onChange={InputTextHandler} placeholder='Add a new task' className='todo-input'/>
        <button onClick={SubmitHandler} type='submit' className="todo-button">Add</button>
      </form>
    );
}

export default Form;