import '../styles/offers.css'
import '../components/ticket'
import Ticket from '../components/ticket';

function Offers() {
    return (
        <div>
            <h1>Enjoy irresistible flavours for very little.</h1>
            <div className='ticket-grid-row'>
                <Ticket name="Name or Description" price="2.99€"></Ticket>
                <Ticket name="Name or Description" price="2.99€"></Ticket>
                <Ticket name="Name or Description" price="2.99€"></Ticket>
                <Ticket name="Name or Description" price="2.99€"></Ticket>
            </div>
        </div>
    );
}

export default Offers;