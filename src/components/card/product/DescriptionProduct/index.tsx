import { Minus, Plus, ShoppingCartSimple, TrashSimple } from "phosphor-react"
import { Typography } from "../../../Typography"
import styles from "./DescriptionProduct.module.css"
import { useState } from "react";
import { ControllerQuantity } from "../../ControllerQuantity";
import { useAppDispatch, useAppSelector } from "../../../../store/config.reducer";
import { decrement, increment, productQuantitySelector, remove } from "../../../../store/cart/features/cartSlice";
import { IProduct } from "../../../../models/interfaces/api/product.interface";


interface IDescriptionProduct {
    product: IProduct
}


export const DescriptionProduct = ({ product }: IDescriptionProduct) => {
    const quantity = useAppSelector((state) =>
        productQuantitySelector(state, product?.id))
    const dispatch = useAppDispatch()

    const price: number = parseInt(product?.price)

    return (
        <div className={styles.descriptionContainer}>
            <h1 className={styles.name}>{product?.name}</h1>
            <p className={styles.description}>{product?.description}</p>
            <Typography as="small">R$ {price.toFixed(2)}</Typography>


            <div className={styles.buttonsContainer}>
                {quantity && <div className={styles.descriptionQuantity}>{quantity}</div>}
                {quantity === 1 &&
                    <button
                        onClick={() => dispatch(remove(product))}
                        className={styles.cart}>
                        <TrashSimple color="#262626" />
                    </button>
                }
                {/* <ControllerQuantity decrement={() => dispatch(decrement(product))} increment={() => dispatch(increment(product))} quantity={quantity} /> */}
                <button
                    onClick={() => dispatch(increment(product))}
                    className={styles.cart}>
                    <ShoppingCartSimple color="#262626" />
                    {quantity === 0 || quantity === undefined && "Adicionar"}

                </button>
            </div>
        </div>
    )
}