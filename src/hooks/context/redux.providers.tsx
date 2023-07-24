import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "../../store/config.reducer"

interface IProvidersRedux {
    children: ReactNode
}

const ProvidersRedux = ({ children }: IProvidersRedux) => {
    return <Provider store={store}>{children}</Provider>
}

export default ProvidersRedux;