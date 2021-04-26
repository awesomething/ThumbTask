import "./SearchPage.css";
import React, { useState, useEffect } from "react";
import Form from "./Form";

import Todolist from "./Todolist";

function SearchPage() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus]= useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  //use effect
  useEffect(() => {
    // eslint-disable-next-line
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'true':
        setFilteredTodos(todos.filter(todo => todo.categories === true));
        break;
        case 'false':
          setFilteredTodos(todos.filter(todo => todo.categories === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
  };
  //save to local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
    setTodos(todoLocal);
    }
  };

  return (
    <div className="SearchPage">
      <header>
      <h1>Weekly Tasks</h1>
      </header>
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      inputText={inputText}
      setStatus={setStatus}
      />
      <Todolist filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
      <section className="section section--three u-margin-bottom-xxxl">

</section>

<footer className="footer u-margin-bottom-big">
  <center><div className="footer__brand-container">
    <p className="footer__author-text">
      Created by <a href="http://www.henryebomah-awesomething.vercel.app/" target="_blank" rel="noreferrer">Henry Ebomah</a>
    </p>
    <div className="footer__social-media u-margin-bottom-small ">
      <a href="https://github.com/awesomething" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
      |
      <a href="https://www.linkedin.com/in/henryebomah/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
    </div>
    <div className="copyright-text">
      <p>
        Copyright &copy; 2021
      <br />
        All Rights Reserved
    </p>
    </div>
  </div></center>
</footer>
    </div>
  );
}

export default SearchPage;
