import React, { useContext } from "react";
import { TodosContext } from "../store/todoContext";
import Item from "./Item";
import classes from "./Todos.module.css"
const Todos: React.FC=()=>{
    const todoContext=useContext(TodosContext)
    return (
      <ul className={classes.todos}>
        {todoContext.items.map((item) => (
          <Item
            text={item.text}
            key={item.id}
            onDeleteHandler={todoContext.removeTodo.bind(null,item.id)}
          />
        ))}
      </ul>
    );
}
export default Todos