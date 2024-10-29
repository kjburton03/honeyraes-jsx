import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCustomerByUserId } from "../../services/customerService"
import "./Customers.css"

export const CustomerDetails = () => {
    const[customer, setCustomer] = useState({})
    const { customerId } = useParams()

    useEffect(() => {
        getCustomerByUserId(customerId).then((data) => {
            const customerObj = data[0]
            setCustomer(customerObj)
        })
    }, [customerId])
    
    return <section className="customer">
        <header className="customer-header">{customer.user?.fullName}</header>
        <div>
            <span className="customer-info"> Email : {customer.user?.email} </span>
        </div>
        <div>
            <span className="customer-info"> Address : {customer.address} </span>
        </div>
        <div>
            <span className="customer-info"> Number : {customer.phoneNumber} </span>
        </div>
    </section>
}