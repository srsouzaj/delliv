import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"
import { Typography } from "../../../Typography"
import styles from "./DescriptionProduct.module.css"
import { useState } from "react";
import { ControllerQuantity } from "../../ControllerQuantity";


interface IDescriptionProduct {
    name: string;
    description: string;
    price: string
}


export const DescriptionProduct = ({ description, name, price }: IDescriptionProduct) => {

    return (
        <div className={styles.descriptionContainer}>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.description}>{description}</p>
            <Typography as="small">R$ {price}</Typography>


            <div className={styles.buttonsContainer}>
                <ControllerQuantity />
                <button className={styles.cart}>
                    <ShoppingCartSimple color="#262626" />
                </button>
            </div>
        </div>
    )
}