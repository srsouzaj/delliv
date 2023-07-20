import { Typography } from "../../../../components/Typography"
import { Categories } from "../Categories"
import styles from "./Filter.module.css"

export const FilterSection = () => {
    return (
        <div className={styles.container}>
            <p>Selecione a categoria:</p>
            <Categories />
        </div>
    )
}