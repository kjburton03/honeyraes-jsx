import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket"
import { Pointless } from "./Testie"

export const TicketList = () => {
const [allTickets, setAllTickets] = useState([])
const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
const [filteredTickets, setFilteredTickets] = useState([])


  // function is what we want to happen array is when we want it to happen to
useEffect(() => {
 getAllTickets().then(ticketsArr => {
    setAllTickets(ticketsArr)
    console.log("tickets set!")
})
  }, []) //runs on initial render of the component

useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      )
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergencyOnly, allTickets])

  useEffect(() => {

  })



  return <div className="tickets-container">
    <h2> Tickets </h2>
    <div>
      <button className="filter-btn btn-primary" onClick={() =>{setShowEmergencyOnly(true)} }> E-mergency</button>
      <button className="filter-btn btn-primary" onClick={() =>{setShowEmergencyOnly(false)}}> show all</button>
    </div>
    <article className="tickets" >
        {filteredTickets.map((ticketObj) => {
            return   <Ticket ticket={ticketObj} name="joe" penis="peness" hungry="taco" key={ticketObj.id} />
            
        })}
        </article>

  </div>// JSX to display allTickets
}
