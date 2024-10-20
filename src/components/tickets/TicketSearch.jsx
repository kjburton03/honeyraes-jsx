export const TicketSearch = ({setSearchTerm, setShowEmergencyOnly}) => {

    return <>
    <div className="filter-bar">
        <button className="filter-btn btn-primary" onClick={() =>{setShowEmergencyOnly(true)} }> E-mergency</button>
        <button className="filter-btn btn-primary" onClick={() =>{setShowEmergencyOnly(false)}}> show all</button>
        <input
            onChange={(event) => {
                setSearchTerm(event.target.value)
            }}
            type="text"
            placeholder="what it do"
            className="ticket-search" />
    </div>
    </>
}