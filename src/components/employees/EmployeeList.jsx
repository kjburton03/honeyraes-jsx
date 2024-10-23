import { useEffect, useState } from "react"


import "./Employees.css"
import { User } from "../../users/User"
import { getAllEmployees } from "../../services/employeesService"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect( () => {
        getAllEmployees().then((employeeArray) => {
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