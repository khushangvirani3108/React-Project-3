import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
import { json } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todo")=== null || localStorage.getItem("todo") === undefined){
    initTodo = [];
    
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todo"));
    
  }

  function onDelete(todoi){
    setTodo(
      todo.filter((e)=>{
        return e !== todoi;
      })
    );
    localStorage.getItem("todo",JSON.stringify(todo));
    alert("Item Successfully Removed")
  }

  const addTodo = (title,desc) =>{
    let sno;
    if(todo.length === 0){
      sno = 1;
    }
    else{
      sno = todo[todo.length - 1].id + 1;
    }
    
    const mytodo={
      id : sno, 
      note : title,
      descc : desc
    };

    console.log("Data is",mytodo);
    setTodo([...todo,mytodo]);
    alert("Todo Successfully added")
  };
  const [todo,setTodo]= useState(initTodo);

  useEffect(() =>{
    localStorage.setItem("todo",JSON.stringify(todo))
  },[todo]);
  return (

<Router>
      <Navbar />
      <Routes>
      <Route path="/about" element={<Footer />}></Route>
  <Route path="/about" element={<Footer />} />
  <Route
    path="/"
    element={<Todo  addTodo={addTodo} todo={todo} onDelete={onDelete} />}
  />
</Routes>

      <Footer />
    </Router>
    
    
  );
}

export default App;
