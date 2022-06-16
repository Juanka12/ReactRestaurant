import "../styles/card.css"

function Card({img, body}) {
    return (
        <div className="card">
            <div className="card-header">
                <img src={img} alt="headerImg"/>
            </div>
            <div className="card-body">{body}</div>
            <div className="card-footer">
                <button className="btn">Pedir</button>
            </div>
        </div>
    );
}

export default Card;