import { TrashSimple } from "phosphor-react"
import { Typography } from "../../../../../components/Typography"
import { ControllerQuantity } from "../../../../../components/card/ControllerQuantity"
import styles from "./ProductItem.module.css"


interface IProductItem {
    name: string
    price: string
}

export const ProductItem = ({ name, price }: IProductItem) => {
    return (
        <div className={styles.controller}>
            <div className={styles.description}>
                <Typography> {name}</Typography>
                <div className={styles.controller}>
                    <ControllerQuantity />
                    <button><TrashSimple /> REMOVER</button>
                </div>
            </div>
            <Typography>R$ {price}</Typography>
        </div>
    )
}