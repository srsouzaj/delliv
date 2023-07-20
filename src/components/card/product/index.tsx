import Image from "next/image"
import styles from "./CardProduct.module.css"
import Logo from "../../../../public/logo.jpeg"
import { DescriptionProduct } from "./DescriptionProduct"

interface ICardProduct {
    name: string;
    description: string;
    price: string
}

export const CardProduct = ({ description, name, price }: ICardProduct) => {
    return (
        <div className={styles.container}>
            <Image src={Logo} width={160} height={120} alt="" />
            <DescriptionProduct description={description} name={name} price={price} />
        </div>
    )
}