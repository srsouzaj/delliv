import { Typography } from "../../../../components/Typography"
import styles from "./CoffeeSelected.module.css"
import { ProductItem } from "./ProductItem"

export const CoffeeSelected = () => {
    return (
        <div className={styles.coffeSelected}>
            <Typography as="headline">Cafés selecionados</Typography>
            <ProductItem name="Roupa Malhada" price="9.9" />
            <hr className={styles.divider} />
            <ProductItem name="Roupa Malhada" price="9.9" />
            <hr className={styles.divider} />
            <ProductItem name="Roupa Malhada" price="9.9" />
            <hr className={styles.divider} />
            <ProductItem name="Roupa Malhada" price="9.9" />
            <hr className={styles.divider} />
        </div>
    )
}