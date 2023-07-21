import type { NextPage } from 'next'
import { ProductScreen } from '../../screen/product'
import { CheckoutScreen } from '../../screen/checkout'

const ProductById: NextPage = () => {
    return (
        <>
            <title>Delliv - Checkout</title>
            <CheckoutScreen />
        </>
    )
}

export default ProductById
