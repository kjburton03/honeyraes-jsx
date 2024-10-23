import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket"
import { Pointless } from "./Testie"
import { TicketSearch } from "./TicketSearch"

export const TicketList = () => {
const [allTickets, setAllTickets] = useState([])
const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
const [filteredTickets, setFilteredTickets] = useState([])
const [searchTerm, setSearchTerm] = useState("")
const [showNonEmergencyOnly, setShowNonEmergencyOnly] = useState(true)


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
      console.log("lesgo")
    } else {
      setFilteredTickets(allTickets)
      console.log("I thought you were working")
    } 

  }, [showEmergencyOnly, showNonEmergencyOnly, allTickets])

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) => 
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])



  return <div className="tickets-container">
    <h2> Tickets </h2>

    <TicketSearch setSearchTerm={setSearchTerm} setShowEmergencyOnly={setShowEmergencyOnly} setShowNonEmergencyOnly={setShowNonEmergencyOnly}/>
    <article className="tickets" >
        {filteredTickets.map((ticketObj) => {
            return   <Ticket ticket={ticketObj} name="joe" penis="peness" hungry="taco" key={ticketObj.id} />
            
        })}
        </article>

  </div>// JSX to display allTickets
}
