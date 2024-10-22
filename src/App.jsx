
import "./App.css"
import { CustomerList } from "./components/customers/CustomerList"
import { EmployeeList } from "./components/employees/EmployeeList"
import { TicketList } from "./components/tickets/TicketList"
import { Routes, Route, Outlet } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"

export const App = () => {
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
      <Route path="tickets" element={ <TicketList />} />
      <Route path="employees" element={ <EmployeeList />} />
      <Route path="customers" element={ <CustomerList />} />
      </Route>
    </Routes>

  )
}