import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";


function App() {
  const [todos,manageTodos]=useState<Todo[]>([])
  const addTodoHandler=(text:string)=>{
    const newTodo=new Todo(text);
    console.log(text);
    manageTodos((prev)=>{
      return prev.concat(newTodo);
    })
  }
  const onDeleteHandler=(itemId:string)=>{
    manageTodos((prev)=>{
      return prev.filter((item)=>item.id!==itemId)
    })
  }
  return (
    <>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onDeleteHandler={onDeleteHandler}/>
    </>
  );
}

export default App;
