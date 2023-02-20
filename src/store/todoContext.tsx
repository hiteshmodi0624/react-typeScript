import React, { useState } from "react";
import Todo from "../models/todo";


type TodoContextObject={
    items: Todo[];
    addTodo: (text:string) => void;
    removeTodo: (id: string) => void;
}
export const TodosContext = React.createContext<TodoContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});
const TodosContextProvider: React.FC<{children:React.ReactNode}> = (props) => {
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
    const contextValue:TodoContextObject={
        items:todos,
        addTodo:addTodoHandler,
        removeTodo:onDeleteHandler
    }
    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
};

export default TodosContextProvider
