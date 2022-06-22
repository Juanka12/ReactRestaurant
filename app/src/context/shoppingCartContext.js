import { createContext, useContext } from "react";
import { UseLocalStorage } from "../utilities/useLocalStorage";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}) {

    const [cartItems, setCartItems] = UseLocalStorage("shopping-cart", []);

    function getItemQuantity(id) {
        return cartItems.find(item => item.id === id)?.qty || 0;
    }
    function increaseCartQuantity(id) {
        setCartItems(items => {
            if (items.find(item => item.id === id) == null) {
                return [...items, {id, qty: 1}]
            }else {
                return items.map((x) => x.id === id ? {...x, qty: x.qty + 1} : x)
            }
        })
    }
    function decreaseCartQuantity(id) {
        setCartItems(items => {
            if (items.find(item => item.id === id)?.qty === 1) {
                return items.filter(item => item.id !== id);
            }else {
                return items.map((x) => x.id === id ? {...x, qty: x.qty - 1} : x)
            }
        })
    }
    function removeFromCart(id) {
        setCartItems(items => {
            return items.filter(item => item.id !== id)
        })
    }


    return (
        <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems}}>
            {children}
        </ShoppingCartContext.Provider>
    );
}