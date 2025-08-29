import { useState } from "react"

export const AddToDo =({onAdd})=>{
    const [text,setText] = useState("")
    const[error,setError] = useState("")
    
    const handleSave = () =>{
        if(!text.trim()){
            return setError("please fill the text")
        }
        setError("")
        onAdd(text)
        setText("")
    
        
    }
    return <>
        <div class="add-todo">
        <p>Add to do</p>
        {error && <p style={{color:"red"}}>{error}</p>}
        <input type="text" placeholder="Write your task..."
            value={text}
            onChange={e=>setText(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        </div>
    </>
}