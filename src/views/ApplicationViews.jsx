import { Route, Outlet, Routes } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { Welcome } from "../components/welcome/Welcome"
import { TicketList } from "../components/tickets/TicketList"
import { EmployeeList } from "../components/employees/EmployeeList"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { CustomerList } from "../components/customers/CustomerList"
import { EmployeeForm } from "../components/forms/EmployeeForm"
import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    setCurrentUser(honeyUserObject)
  }, [])
  return currentUser.isStaff ? <EmployeeViews currentUser={currentUser} /> : <CustomerViews />
}
