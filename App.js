import Navegacion from "./Navegacion"
import { AuthProvider } from "./app/context/AuthContext"

export default function App() {
  return (
    <AuthProvider>
      <Navegacion />
    </AuthProvider>
  )
}