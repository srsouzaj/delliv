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
            {products === undefined && <Typography>
                Não há items disponíveis nesta categoria
            </Typography>}
            {products !== undefined &&
                products.map(product => {
                    return (
                        <CardProduct
                            key={product.id}
                            description={product.description}
                            name={product.name}
                            imgSrc={product.imgSrc}
                            price={product.price} />
                    )
                })
            }

        </div>
    )
}