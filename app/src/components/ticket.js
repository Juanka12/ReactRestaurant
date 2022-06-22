import "../styles/ticket.css"
import placeholderimg from "../images/placeholder.png"

function Ticket({name, price}) {
    return (
        <div className="ticket">
            <div className="ticket-left"></div>
            <div className="ticket-right"></div>
            <div className="ticket-content-wrapper" onClick={OnTicketClick}></div>
            <img className="ticket-img" src={placeholderimg} alt="placeholder" onClick={OnTicketClick}></img>
            <p className="ticket-text" onClick={OnTicketClick}>{name}</p>
            <div className='ticket-line' onClick={OnTicketClick}></div>
            <p className="ticket-price">{price}</p>
        </div>
    );
}

function OnTicketClick(event) {
    console.log("clicked");
}

export default Ticket;