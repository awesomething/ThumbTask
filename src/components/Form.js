import React from "react";
import config from '../config'

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {

const postTodos = (title, categories) =>{
  return fetch(`${config.API_ENDPOINT}/todos`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      title,
      categories,
    }),
  })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
}
//
    const inputTextHandler = (e) => {
     
     setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        postTodos(inputText)
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form onSubmit={submitTodoHandler}>
      <input 
      value={inputText} 
      onChange={inputTextHandler} 
      required
      type="text" 
      className="todo-input" />

      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      {/* <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div> */}
    </form>
    );
}

export default Form;