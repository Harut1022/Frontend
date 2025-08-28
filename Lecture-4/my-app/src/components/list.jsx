import UserItem from "./user-item"

export default function List({data,onSalaryUp,onSalaryDown}){
    console.log(data)
    return <>

        <table className="table table-bordered table-striped">

            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>salary</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>

                {
                  
                    data.map(user=> <UserItem key = {user.id} user = {user} onSalaryDown = {onSalaryDown} onSalaryUp = {onSalaryUp}/>)
                }
            </tbody>
        </table>
    
    </>
}