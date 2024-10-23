import { useState, useEffect } from "react"


export const Ticket = ({ ticket, name, hungry }) => {
    // const [employees, setEmployees] = useState([])
    // const [assignedEmployee, setAssignedEmployee] = useState({})

    // useEffect(() => {
    //     getAllEmployees().then(employeesArray => {
    //         setEmployees(employeesArray)
    //         console.log("life is weird")
    // }) 
    // }, [])

    // useEffect(() => {
    //     const foundEmployee = employees.find(employee => employee.id === ticket.employeeTickets[0]?.employeeId

    //     )
    //     setAssignedEmployee(foundEmployee)
    // }, [employees, ticket])
    return (
            <section className="ticket" >
                <header className="ticket-info"> #{ticket.id} </header>
                <div> {ticket.description} </div>

            <footer>
                <div>
                <div className="ticket-info"> emergency </div>
                <div> {ticket.emergency ? "yes" :" no"} </div>
                <div >
                <div className="ticket-info"> employee </div>
                {/* <div> {assignedEmployee ? assignedEmployee.user?.fullName : "none" } </div> */}
                <div> & {name} {hungry} </div>
                </div>
                </div>

            </footer>
            
            </section>

    )
}