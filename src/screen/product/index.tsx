import { Typography } from "../../components/Typography"
import styles from "./product.module.css"
import { CardList } from "./CardList"
import { IProduct } from "../../models/interfaces/api/product.interface"
interface IProductScreen {
    products: IProduct[]
    type: string
}

export const ProductScreen = ({ products, type }: IProductScreen) => {

    return (
        <div className={styles.container}>
            <Typography as="headline"> Produtos relacionados à(ao) {type}</Typography>
            <CardList products={products} />
        </div>
    )
}