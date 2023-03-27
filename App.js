import Navegacion from "./Navegacion"
import { StatusBar } from "expo-status-bar"
import { AuthProvider } from "./app/context/AuthContext"
import CartProvider from "./app/context/CartContext"

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <AuthProvider>
        <CartProvider>
          <Navegacion />
        </CartProvider>
      </AuthProvider>
    </>
  )
}