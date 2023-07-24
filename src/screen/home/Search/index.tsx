import { MagnifyingGlass } from "phosphor-react"
import styles from "./Search.module.css"
import { IPagination } from "../../../models/interfaces/api/pagination.interface"
import { IProduct } from "../../../models/interfaces/api/product.interface"

interface ISearch {
    products: IPagination<IProduct>
}

export const Search = ({ products }: ISearch) => {
    const handleChange = (e: string) => {
        const a = products.data.filter(item => {
            return item.name.includes(e)
        })

        console.log(a)
    }

    return (
        <div className={styles.container}>
            <input onChange={(e) => handleChange(e.target.value)} className={styles.input} placeholder="Digite sua pesquisa" />
            <button className={styles.button}><MagnifyingGlass color="#FFF" /> </button>
        </div>
    )
}