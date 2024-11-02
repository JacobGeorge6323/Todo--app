import React from "react";
import "./Todo.css";
function TodoItem({ key, text, id, handleDelete }) {
  return (
    <div className="Todoitem">
      <p>{text}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
