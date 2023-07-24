import { Typography } from "../../../components/Typography"
import { CardProduct } from "../../../components/card/product"
import { IProduct } from "../../../models/interfaces/api/product.interface"
import styles from "./CardList.module.css"

interface ICardList {
    products: IProduct[]
}

export const CardList = ({ products }: ICardList) => {
    return (
        <div className={styles.container}>
            {products.length === 0 && <Typography as="small">
                Não há itens disponíveis nesta categoria. Tente novamente mais tarde.
            </Typography>}
            {products !== undefined &&
                products.map(product => {
                    return (
                        <CardProduct
                            key={product.id}
                            product={product}
                        />
                    )
                })
            }

        </div>
    )
}