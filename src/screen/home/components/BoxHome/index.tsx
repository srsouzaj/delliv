import styles from "./boxHome.module.css"
import Store from "../../../../../public/shopping-store.png"
import Image from "next/image"
import { TotalPriceSelector, totalCartItemSelector } from "../../../../store/cart/features/cartSlice"
import { useAppSelector } from "../../../../store/config.reducer"

export const BoxHome = () => {
    const totalItems = useAppSelector(totalCartItemSelector)

    return (
        <div className={styles.container}>
            <div>
                <h1>Olá!</h1>
                <p>Seja bem vindo(a) ao Delliv Shop</p>
                <div className={styles.descriptionCart}>
                    <p>Você possui</p>
                    <p className={styles.quantity}>{totalItems || 0}</p>
                    <p> item(ns) no carrinho</p>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src={Store} width={220} height={220} alt="shopping house" />
            </div>

        </div>
    )
}