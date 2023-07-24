import { Typography } from "../../../../../components/Typography"
import styles from "./ProductItem.module.css"
import { IProduct } from "../../../../../models/interfaces/api/product.interface"
import { useAppDispatch } from "../../../../../store/config.reducer"
import Image from "next/image"


interface IProductItem {
    product: IProduct
}

export const ProductItem = ({ product }: IProductItem) => {
    const dispatch = useAppDispatch()

    const price: number = parseInt(product.price)


    return (
        <div className={styles.controller}>
            <div className={styles.description}>
                <Image src={product.imgSrc} width={40} height={40} alt={product.name} />
                <Typography> {product.name}</Typography>
            </div>
            <Typography as="small">R$ {price.toFixed(2)}</Typography>
        </div>
    )
}