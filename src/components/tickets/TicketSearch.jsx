import { useNavigate } from "react-router-dom"

export const TicketSearch = ({ 
    setShowEmergencyOnly, 
    setShowOpenOnly,
    setSearchTerm, 
    currentUser,
}) => {

    const navigate = useNavigate()
    
    return (


    <div className="filter-bar">
        {currentUser.isStaff ? <>

        <button className="filter-btn btn-primary" onClick={() =>{setShowEmergencyOnly(true)} }> E-mergency</button>

        <button className="filter-btn btn-primary" onClick={() =>{setShowEmergencyOnly(false)}}> show all</button>


        <input
            onChange={(event) => {
                setSearchTerm(event.target.value)
            }}
            type="text"
            placeholder="come on bb"
            className="ticket-search"
        />
        </> : (
            <>
                <button className="filter-btn btn-primary" onClick={() => {navigate("/tickets/create")}}>Create Ticket</button>

                <button 
                className="filter-btn btn-info" 
                onClick={() => {
                    setShowOpenOnly(true)
                }}>
                Open Tickets 
                </button>

                <button 
                className="filter-btn btn-secondary"
                onClick={() => {
                    setShowOpenOnly(false)
                }}
                >
                All My Tickets 
                </button>
            </>
        )}
    </div>
    )
}