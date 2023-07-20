import { MagnifyingGlass } from "phosphor-react"
import styles from "./Search.module.css"

export const Search = () => {
    return (
        <div className={styles.container}>
            <input className={styles.input} placeholder="Digite sua pesquisa" />
            <button className={styles.button}><MagnifyingGlass color="#FFF" /> </button>
        </div>
    )
}