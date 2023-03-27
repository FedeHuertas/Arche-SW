import { useState, useContext, createContext, useEffect } from "react";

const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [sum, setSum] = useState(0)

    const sumCart = () => {
        setSum(cart.reduce((acc, i) => acc+i.price, 0))
    }

    const clearCart = () => setCart([])


    const removeProduct = (id) => setCart(cart.filter(p => p.id != id))

    const addProduct = (product) => {
        cart.find(p => p.id == product.id) ?? setCart([...cart, product])
    }

    useEffect(() => {
        sumCart()
    }, [cart])

    return(
        <cartContext.Provider
            value={{
                clearCart,
                removeProduct,
                addProduct,
                cart,
                sum
            }}
        >
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;