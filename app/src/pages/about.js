import "../styles/about.css"

function About() {
    return (
        <div className="about-container">
            <h1>About restaurant</h1>
            <ul className="about-lines">
                <li>
                    Customer support line
                    <div className="about-descriptions">
                        <p>924-***-***</p>
                    </div>
                </li>
                <li>
                    Mail for customer support
                    <div className="about-descriptions">
                        <p>customersupport@restaurant.com</p>
                    </div>
                </li>
                <li>
                    Headquarters address
                    <div className="about-descriptions">
                        <p>Fake street 123<br/>
                        28703 Madrid</p>
                    </div>
                </li>
            </ul>
            <p className="line"></p>
            <h1>Do you have any questions ?</h1>
            <form className="about-form">
                <div className="form-set">
                    <label htmlFor="topic" className="form-label">Topic</label>
                    <select className="form-input" id="topic">
                        <option value="product">Product</option>
                        <option value="delivery">Delivery</option>
                        <option value="staff">Staff</option>
                        <option value="refund">Refund</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-set">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input className="form-input" type="text" id="name" placeholder="Name" required/>
                </div>
                <div className="form-set">
                    <label htmlFor="phone" className="form-label">Phone number</label>
                    <input className="form-input" type="tel" id="phone" placeholder="Phone Number"/>
                </div>
                <div className="form-set">
                    <label htmlFor="mail" className="form-label">E-mail *</label>
                    <input className="form-input" type="email" id="mail" placeholder="E-mail" required/>
                </div>
                <div className="form-set">
                    <label htmlFor="text" className="form-label">Question</label>
                    <textarea className="form-input text-area" id="text" placeholder="Question / Observation"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
  
export default About;