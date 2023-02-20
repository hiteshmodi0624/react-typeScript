import classes from "./Item.module.css"
const Item:React.FC<{text:string,onDeleteHandler:()=>void}>=(props)=>{

    return <li className={classes.item} onClick={props.onDeleteHandler}>{props.text}</li>
}
export default Item