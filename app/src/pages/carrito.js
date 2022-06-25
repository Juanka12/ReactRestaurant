import CartItem from "../components/cartItem";
import { useShoppingCart } from "../context/shoppingCartContext";
import { CurrencyFormater } from "../utilities/currencyFormatter";
import shopItems from "../data/shopItems.json"
import "../styles/carrito.css"

function Carrito() {
    const {cartItems} = useShoppingCart();
    return (
        <div className="shoppingCart-items">
            {cartItems.map(item => {
                return <CartItem key={item.id} params={item}></CartItem>
            })}
            <div className="shoppingCart-totalPrice">
                Total {CurrencyFormater(cartItems.reduce((total, cartItem) => {
                    const item = shopItems.find(x => x.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.qty
                }, 0))}
            </div>
        </div>
    );
}

export default Carrito;