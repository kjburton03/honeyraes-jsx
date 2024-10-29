
import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { ApplicationViews } from "./views/ApplicationViews"
import { Authorized } from "./views/Authorized"

export const App = () => {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route 
        path="*" 
        element={
          // cheks to see if user is authorized
          <Authorized>
            <ApplicationViews />
          </Authorized>
      } />
    </Routes>

  )
}