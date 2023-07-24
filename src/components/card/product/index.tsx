import Image from "next/image"
import styles from "./CardProduct.module.css"
import Logo from "../../../../public/logo.jpeg"
import { DescriptionProduct } from "./DescriptionProduct"
import { IProduct } from "../../../models/interfaces/api/product.interface"

interface ICardProduct {
    product: IProduct
}

export const CardProduct = ({ product }: ICardProduct) => {
    return (
        <div className={styles.container}>
            <Image src={product?.imgSrc || Logo} width={160} height={120} alt="" />
            <DescriptionProduct product={product} />
        </div>
    )
}