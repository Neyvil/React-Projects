import "./index.css";
import { useState } from "react";
import { XCircle } from 'lucide-react';

function generateId(){
    return Math.floor(Math.random()*100)
}

function Todo() {
  const [todo, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit=()=>{
    setTodos((todo)=>
        todo.concat({
            text:input,
            id:generateId()
        })
    );
        setInput("");
    
  }
  const removeTodo=(id)=>{
    setTodos((todo)=>todo.filter((t)=>t.id !== id))
  }

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter ToDO"
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>

    <ul className="todos-list">
      {todo.map(({text,id})=>{
        return <li key={id} className="todo">
          <span>{text}</span>
          <button className="close" onClick={()=>removeTodo(id)}>
          <XCircle />
          </button>
        </li>
      })}
    </ul>

    </>
  );
}

export default Todo;
