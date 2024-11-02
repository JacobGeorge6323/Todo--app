import React, { useRef, useState } from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";
function Todo() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();
  function addTodo() {
    const createTodo = {
      id: Date.now(),
      text: inputRef.current.value.trim(),
    };
    setTodoList((prev) => [...prev, createTodo]);
    inputRef.current.value = "";
  }
  const handleDelete = (id) => {
    setTodoList((prevsTodo) => {
      return prevsTodo.filter((newtodo) => newtodo.id !== id);
    });
  };

  return (
    <div className="todo">
      <div className="todo-list">
        {" "}
        <input type="text" ref={inputRef} placeholder="Add todo" />
        <button onClick={addTodo}>Add</button>
      </div>

      <div>
        {todoList.map((item) => {
          return (
            <TodoItem
              id={item.id}
              text={item.text}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
