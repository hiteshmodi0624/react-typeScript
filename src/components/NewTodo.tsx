import { useRef } from "react";
import classes from "./NewTodo.module.css"
const NewTodo:React.FC<{onAddTodo:(text:string)=>void}>=(props)=>{
    const InputRef=useRef<HTMLInputElement>(null);
    const SubmitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        const inputValue=InputRef.current!.value
        if(inputValue.trim().length===0){
            return
        }
        props.onAddTodo(inputValue);
    }
    return(
        <form onSubmit={SubmitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" name="text" ref={InputRef}/>
            <button>Add Todo</button>
        </form>
    )
}
export default NewTodo