import { useEffect, useState } from "react";
import "./Employees.css";
import { User } from "../../users/User";
import { Link } from "react-router-dom";
import { getStaff } from "../../services/userService";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect( () => {
        getStaff().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])
    return (
        <div className="employees" >
            {employees.map((employeeObj)=> {
                return <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>

                    <User user={employeeObj} key={employeeObj.id} />

                    </Link>
                
            })}
        </div>
    )
}