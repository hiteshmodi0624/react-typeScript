import React from "react";
import Todo from "../models/todo";
import Item from "./Item";
import classes from "./Todos.module.css"
const Todos: React.FC<{items:Todo[],onDeleteHandler:(itemId:string)=>void}>=(props)=>{
    return (
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <Item
            text={item.text}
            key={item.id}
            onDeleteHandler={props.onDeleteHandler.bind(null,item.id)}
          />
        ))}
      </ul>
    );
}
export default Todos