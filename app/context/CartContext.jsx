import { useState, useContext, createContext } from "react";

const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const removeProduct = (id) => setCart(cart.filter(p => p.id != id))

    const addProduct = (product) => {
        cart.find(p => p.id == product.id) ?? setCart([...cart, product])
    }

    return(
        <cartContext.Provider
            value={{
                clearCart,
                removeProduct,
                addProduct,
                cart
            }}
        >
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;