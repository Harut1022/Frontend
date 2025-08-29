import { ToDoItem } from "./ToDoItem"

export const List =({items,onComplete})=>{
   
    return <>
        <div class = "list"> 
            {
                items.map(todo=> <ToDoItem key = {todo.id} todo = {todo} onComplete = {onComplete}/>)
            }
            
        </div>
        
    </>
}