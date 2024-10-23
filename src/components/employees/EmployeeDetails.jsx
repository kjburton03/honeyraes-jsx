import { useEffect, useState } from "react"
import { getEmployeeByUserId } from "../../services/employeeService"
import { useParams } from "react-router-dom"

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({})
    const { employeeId } = useParams()

    useEffect (() => {
        getEmployeeByUserId(employeeId).then((data) => {
            const employeeObj = data[0]
            setEmployee(employeeObj)

        })
    }, [employeeId])

    return <section className="employee">
        <header className="employee-header"> {employee.user?.fullName} </header>
        <div>
            <span className="employee-info"> Email: {employee.user?.email} </span>
        </div>
        <div>
            <span className="employee-info"> Rate: $
            {employee.rate} </span>
        </div>
        <div>
            <span className="employee-info"> Specialty: {employee.specialty} </span>
        </div>

    </section>
}