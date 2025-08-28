import Filter from "./filter";
import List from "./list";

export default function UserList({data,onSalaryUp,onSalaryDown}){
    
    return <>
    <h4>Manage Users:</h4>
        <Filter/>
        <List
            data = {data}
            onSalaryDown = {onSalaryDown}
            onSalaryUp = {onSalaryUp}
        />

    </>
}