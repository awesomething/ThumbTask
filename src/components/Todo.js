import React from 'react'
import config from '../config'

const Todo = ({text, todo, todos, setTodos}) => {
    //events
    const deleteTodo = () => {
       return fetch(`${config.API_ENDPOINT}/todos`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json"
          },
        })
          .then((res) => {
            if (!res.ok) {
              return res.json().then((error) => Promise.reject(error));
            }
            return res;
          })
          .catch((error) => {
            console.log(error);
          });
      };

    const deleteHandler =() => {
        deleteTodo(todo)
      setTodos(todos.filter(el => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo && todo.completed ? "completed" : " "}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;