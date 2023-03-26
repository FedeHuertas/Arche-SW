import Navegacion from "./Navegacion"
import { StatusBar } from "expo-status-bar"
import { AuthProvider } from "./app/context/AuthContext"

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <AuthProvider>
        <Navegacion />
      </AuthProvider>
    </>
  )
}