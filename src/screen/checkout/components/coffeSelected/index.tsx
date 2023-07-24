import { Typography } from "../../../../components/Typography"
import { useAppSelector } from "../../../../store/config.reducer"
import styles from "./CoffeeSelected.module.css"
import { ProductItem } from "./ProductItem"

export const CoffeeSelected = () => {
    const cartItems = useAppSelector((state) => state.cart.cartItems)


    return (
        <div className={styles.coffeSelected}>
            <Typography as="headline">Cafés selecionados</Typography>
            {cartItems.length === 0 && <Typography as="small"> Seu carrinho está vazio</Typography>}
            {cartItems.length !== 0 && cartItems.map(cartItem => {
                return (
                    <>
                        <ProductItem key={cartItem.product.id} product={cartItem.product} />
                        <hr className={styles.divider} />
                    </>
                )
            })}

        </div>
    )
}