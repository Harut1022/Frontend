export const ToDoItem =({todo,onComplete})=>{
    return <>
       <div className={todo.completed?"done":""}>
        <p>{todo.text}</p>
        <div class = "buttons">
            <button class= "delete">Delete</button>
            <button onClick={()=>onComplete(todo.id)} class = "complete">{todo.completed?"Cancel":"Complete"}</button>
        </div>
       
       </div>
    </>
}