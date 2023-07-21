import { Typography } from "../../components/Typography"
import { CardProduct } from "../../components/card/product"
import styles from "./product.module.css"
import { CardList } from "./CardList"

interface IProductScreen {
    id: number
}

export const ProductScreen = ({ id }: IProductScreen) => {
    return (
        <div className={styles.container}>
            <Typography as="headline"> Produtos</Typography>
            <CardList />
        </div>
    )
}