import { Minus, Plus } from "phosphor-react"
import styles from "./ControllerQuantity.module.css"
import { useState } from "react"

interface IControllerQuantity {
    increment: () => void;
    decrement: () => void;
    quantity: number | undefined
}

export const ControllerQuantity = ({ decrement, quantity, increment }: IControllerQuantity) => {


    return (
        <span className={styles.buttonControllerContainer}>
            <span
                onClick={decrement}
                className={styles.spanController}
            >
                <Minus color={"#7f16e1"} />
            </span>
            <span> {quantity !== undefined ? quantity : 0} </span>
            <span
                onClick={increment}
                className={styles.spanController}
            >
                <Plus color={"#7f16e1"} />
            </span>
        </span>
    )
}