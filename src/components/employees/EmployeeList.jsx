import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService"
import "./Employees.css"
import { User } from "../../users/User"
import { getAllStaff } from "../../services/StaffServicee"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect( () => {
        getAllStaff().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])
    return (
        <div className="customers" >
            {employees.map((employeeObj)=> {
                return ( 

                    <User user={employeeObj} />
                )
            })}
        </div>
    )
}