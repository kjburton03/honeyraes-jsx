useState([]) needs empty array [] inside or it will be undefined

emergency/show all buttons were not working because i did not change it from allTickets.map to filteredTickets.map in the return on app.jsx

the filteredTickets.map on ticketList.jsx,was rendering the data onto the web tools but not the website. when moving the data to ticket.jsx i forgot to add a new "return
 to put <Tickets ticket={ticketobj} />

 In order to access that id in the CustomerDetails component, we utilize the useParams() hook from react-router-dom. ****


routes to the same json file must be held under the same service 


assignTicket function at ticketService.jsx , forgot to add employeeTickets to the () in assignTicket function kept getting errors that the employeeTickets were undefined 

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) => 
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])


customer navbar wasnt showing up, went to customer views to realize the outlet/customer route was not wrapping the rest of the routes 

event was slashed out in ticketForm.jsx because useState() wasn't automatically imported