import { useEffect, useState } from "react"
import { getAllTickets } from "./services/ticketService"
import "./App.css"

export const App = () => {
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



  return <div className="tickets-container">
    <h2> Tickets </h2>
    <div>
      <button className="filter-btn btn-primary" onClick={() =>{setShowEmergencyOnly(true)} }> E-mergency</button>
      <button className="filter-btn btn-primary" onClick={() =>{setShowEmergencyOnly(false)}}> show all</button>
    </div>
    <article className="tickets">
      {filteredTickets.map(ticket => {
        return (
          <section className="ticket" key={ticket.id}>
            <header className="ticket-info"> #{ticket.id} </header>
            <div> {ticket.description} </div>

          <footer>
            <div>
              <div className="ticket-info"> emergency </div>
              <div> {ticket.emergency ? "yes" :" no"} </div>

            </div>

          </footer>
        
          </section>
        )
      })}
    </article>
  </div>// JSX to display allTickets
}