import { useState } from "react"
import UserList from "./components/user-list";


export default function App(){
const [employees,setEmployees] = useState([
    {id:101,name:"Karen",surname:"Harutyunyan",salary:390000},
    {id:102,name:"Harutyun",surname:"Asatryan",salary:350000},
    {id:103,name:"Anahit",surname:"Karabelyan",salary:180000},
    {id:104,name:"Gegham",surname:"Hovakimyan",salary:690000},
    {id:105,name:"Martin",surname:"Haveschunemyan",salary:250000},
    {id:106,name:"Hasmik",surname:"Antramadryan",salary:290000},
    {id:107,name:"Yura",surname:"Ankaravarelyan",salary:360000},
    {id:108,name:"Anjel",surname:"Harutyunyan",salary:200000},
    {id:109,name:"Tigran",surname:"Tiracuyan",salary:180000},
    {id:110,name:"Artyom",surname:"Alaverdyan",salary:450000},
    {id:111,name:"Manuk",surname:"Hakobyan",salary:150000},
    {id:112,name:"Minas",surname:"Mkhitaryan",salary:780000},
  ])

  const handleSalaryUp = id =>{
    setEmployees(employees.map(item => 
      item.id !== id ? item: {...item,salary: item.salary + 72000}
    ))
  }

  const handleSalaryDown = id =>{
    
    setEmployees(employees.map(item => 
      item.id !== id ? item: {...item,salary: item.salary >=32000 ? item.salary - 32000:0}
    ))
  }



  return (
    <>  

      <UserList
      data = {employees}
      onSalaryUp = {handleSalaryUp}
      onSalaryDown = {handleSalaryDown}
      
      />
    
    
    </>
  )
  
}