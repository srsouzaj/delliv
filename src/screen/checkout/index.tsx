import { MapPinLine } from "phosphor-react"
import { Typography } from "../../components/Typography"
import styles from "./Checkout.module.css"
import { CompletedOrder } from "./components/CompletedOrder"
import { CoffeeSelected } from "./components/coffeSelected"

export const CheckoutScreen = () => {
    return (
        <div className={styles.container}>
            <Typography> Checkout</Typography>

            <div className={styles.boxesContainer}>
                <CompletedOrder />
                <CoffeeSelected />
            </div>
        </div >
    )
}