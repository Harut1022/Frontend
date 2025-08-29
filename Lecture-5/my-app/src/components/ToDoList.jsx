import { useState } from "react"
import { AddToDo } from "./AddToDo"
import { List } from "./List"
import { ToDoFilter } from "./ToDoFilter"


export const ToDoList =()=>{
    const [todos,setTodos] = useState([
        {id:101,text:"Read a book",completed:false},
        {id:102,text:"Do workout", completed:true},
        {id:103,text:"listen music", completed:false}

    ])

    const handleAdd = text=>{
        setTodos([...todos,{text,completed:false,id:Date.now()}])
        
    }
    const handleComplete = (id)=>{
        let temp  = todos.map(obj => {
            return obj.id == id?{...obj,completed:!obj.completed}:obj
            
        })
        
        
        
        setTodos(temp)
        console.log(id)
    }
    return <>
        <AddToDo
            onAdd = {handleAdd}
        />
        <ToDoFilter/>
        <List
            items = {todos}
            onComplete = {handleComplete}
        />
    </>
}