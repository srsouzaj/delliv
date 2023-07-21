import { Minus, Plus } from "phosphor-react"
import styles from "./ControllerQuantity.module.css"
import { useState } from "react"

export const ControllerQuantity = () => {
    const [quantity, setQuantity] = useState<number>(1)

    const plusItems = () => {
        setQuantity(quantity + 1)
    }

    const minusItems = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }


    return (
        <span className={styles.buttonControllerContainer}>
            <span
                onClick={minusItems}
                className={styles.spanController}
            >
                <Minus color={"#7f16e1"} />
            </span>
            <span> {quantity} </span>
            <span
                onClick={plusItems}
                className={styles.spanController}
            >
                <Plus color={"#7f16e1"} />
            </span>
        </span>
    )
}