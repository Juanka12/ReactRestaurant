import { useShoppingCart } from "../context/shoppingCartContext";
import "../styles/card.css"

function Card({id, img, title, body}) {
    const {increaseCartQuantity} = useShoppingCart();
    return (
        <div className="card">
            <div className="card-header">
                <img src={img} alt="headerImg"/>
            </div>
            <div className="card-body">{title}<br/>
                {body}
            </div>
            <div className="card-footer">
                <button className="btn" onClick={() => increaseCartQuantity(id)}>Pedir</button>
            </div>
        </div>
    );
}

export default Card;