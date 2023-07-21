import { CardProduct } from "../../../components/card/product"
import styles from "./CardList.module.css"

export const CardList = () => {
    return (
        <div className={styles.container}>
            <CardProduct description="imagine aqui um link" name="aaaaa" price="9.9" />
            <CardProduct description="imagine aqui um link" name="aaaaa" price="9.9" />
            <CardProduct description="imagine aqui um link" name="aaaaa" price="9.9" />
            <CardProduct description="imagine aqui um link" name="aaaaa" price="9.9" />
        </div>
    )
}