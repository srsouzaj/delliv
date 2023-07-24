import Image from "next/image"
import { IProduct } from "../../../../models/interfaces/api/product.interface"
import { useAppDispatch } from "../../../../store/config.reducer"
import { Typography } from "../../../Typography"
import styles from "./ProductItem.module.css"



interface IProductItem {
    product: IProduct
}

export const ProductItem = ({ product }: IProductItem) => {
    const price: number = parseInt(product.price)

    return (
        <div className={styles.controller}>
            <div className={styles.description}>
                <Image src={product.imgSrc} width={40} height={40} alt={product.name} />
                <Typography as="small"> {product.name}</Typography>
            </div>
            <Typography as="small">R$ {price.toFixed(2)}</Typography>
        </div>
    )
}