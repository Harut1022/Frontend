export default function UserItem({onSalaryUp,onSalaryDown,user:{id,name,surname,salary}}){
    return <>
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{salary} AMD</td>
        <td>
            <button onClick={()=> onSalaryUp(id)} className="mx-1 btn btn-sm btn-outline-success">+</button>
            <button onClick={()=> onSalaryDown(id)}className="mx-1 btn btn-sm btn-outline-dark">-</button>
            <button className="mx-1 btn btn-sm btn-outline-danger">x</button>
        </td>
    </tr>

    </>
}