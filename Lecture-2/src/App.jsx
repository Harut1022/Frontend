import {use, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App(){
  const [count,setCount] = useState(0)
  const [skills,setSkills] = useState(["HTML","CSS","JS","React","TS"])
  return  <> 
            <h1> Counter:{count}</h1>
            <button onClick={()=>setCount(count+1)}>up</button>

            <button onClick={()=>setSkills([...skills,prompt()])}>insert</button>
            <ul>
              {
                skills.map((skill,i)=><li key = {i}>{skill}</li>)
              }
            </ul>
          </>
}