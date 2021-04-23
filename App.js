
import React, {Component} from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import SearchPage from './components/SearchPage'
import './App.css';


class App extends Component {

  render(){
    return (
      <div>
    <Router>
    <Header />
    
    <Switch>
    <Route path="/searchPage">
          <SearchPage/>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    
    
    </ Router>
    </div>
    )
    }
  
  
}

export default App





/*import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
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
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
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
    <div className="App">
      <header>
      <h1>My To-Do List</h1>
      </header>
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      inputText={inputText}
      setStatus={setStatus}
      />
      <Todolist filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;*/
