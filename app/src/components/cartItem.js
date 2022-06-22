import { useShoppingCart } from "../context/shoppingCartContext";
import { CurrencyFormater } from "../utilities/currencyFormatter";
import shopItems from "../data/shopItems.json"
import "../styles/cartItem.css"

function CartItem({params}) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart();
    const itemId = params.id;
    const itemQty = getItemQuantity(itemId);
    const item = shopItems.find(x => x.id === itemId);
    if (item == null) return null

    return (
        <div className="cart-item">
            <img src={item.imgUrl} alt="placeHolderImg" className="cart-item-img"></img>
            <p className="cart-item-title">{item.name}</p>
            <p className="cart-item-price">{CurrencyFormater(item.price * itemQty)}</p>
            <div className="cart-item-qty">
                <button className="cart-item-button" onClick={() => decreaseCartQuantity(itemId)}>-</button>
                <p>{itemQty}</p>
                <button className="cart-item-button" onClick={() => increaseCartQuantity(itemId)}>+</button>
            </div>
        </div>
    );
}

export default CartItem;