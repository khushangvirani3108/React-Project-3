import React, { useState } from 'react'
import TodoItem from './TodoItem'


function Todo(props) {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");

  const addnotes = (e) =>{
    e.preventDefault();
    if(!title || !desc){
      alert("Please Input all field !");
    }
    else{
      props.addTodo(title,desc)
      setTitle("")
      setDesc("")
    }
    document.getElementById('title').value = "";
    document.getElementById('desc').value = "";
  }
  return (
    <>
    <div className='container my-5'>
    <h1 className='text-success'>Add New Todo</h1>
    <form onSubmit={addnotes}> 
      <label className='mt-4 fs-5 text-success mb-2 d-block fw-bolder'> Title :</label>
      <input type='text' className='rounded-3 w-100 bg-dark text-success mb-4 py-2 px-1' id='title' onChange={(e)=> setTitle(e.target.value)} placeholder='Enter Todo title ' />
      <label className='mt-4 fs-5 text-success mb-2 d-block fw-bolder'> Description :</label>
      <input type='text' onChange={(e)=> setDesc(e.target.value)} id='desc' className='rounded-3 w-100 bg-dark text-success mb-4 py-2 px-1' placeholder='Enter Todo Discription ' />

      <button type='submit' className='border border-none bg-success text-light rounded-3 px-3 py-2'>Add Todo</button>
    </form>

    <h3 className="my-3">Todo List</h3>
      {props.todo.length ===0 || props.todo.length===null
        ? "Empty Todo List"
        : props.todo.map((todo) => {
          return (
            <>
            <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} /><hr/>
            </>
          );
        })}
  </div>  
  </>
  )
}

export default Todo