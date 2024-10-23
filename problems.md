useState([]) needs empty array [] inside or it will be undefined

emergency/show all buttons were not working because i did not change it from allTickets.map to filteredTickets.map in the return on app.jsx

the filteredTickets.map on ticketList.jsx,was rendering the data onto the web tools but not the website. when moving the data to ticket.jsx i forgot to add a new "return
 to put <Tickets ticket={ticketobj} />

 In order to access that id in the CustomerDetails component, we utilize the useParams() hook from react-router-dom. ****