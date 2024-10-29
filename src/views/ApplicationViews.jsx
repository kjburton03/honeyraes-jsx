import { Route, Outlet, Routes } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { NavBar } from "../components/nav/NavBar"
import { Welcome } from "../components/welcome/Welcome"
import { TicketList } from "../components/tickets/TicketList"
import { EmployeeList } from "../components/employees/EmployeeList"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { CustomerList } from "../components/customers/CustomerList"
import { EmployeeForm } from "../components/forms/EmployeeForm"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    setCurrentUser(honeyUserObject)
  }, [])
  return (
  <Routes> 
  <Route path="/" 
    element={
      <>
        <NavBar /> 
        <Outlet />
      </>
    }
  >
    <Route path="" element={ <Welcome />} />
    <Route 
            path="tickets" 
            element={ <TicketList currentUser={currentUser}/>} />
    <Route path="employee">
        <Route index element={<EmployeeList />} />
        <Route path=":employeeId" element= {<EmployeeDetails />} />
    </Route>
    <Route path="customers">
        <Route index element={<CustomerList />} />
        <Route path=":customerId" element={<CustomerDetails />} />        
    </Route>
    <Route path="profile" element={<EmployeeForm currentUser={currentUser} />} />

  </Route>
  </Routes>
  )
}
