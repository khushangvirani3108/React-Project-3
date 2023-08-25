import React from "react";

const TodoItem = ({ todo,onDelete }) => {
  return (
    <div>
      <h6>{todo.note}</h6>
      <p>{todo.descc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
    </div>
  );
};

export default TodoItem;
