import { useContext } from "react"
import { AuthContext, AuthContextData } from "../../store/auth.context"

export const useAuth = (): AuthContextData => {
    const context = useContext(AuthContext)

    return context
}
