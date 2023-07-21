import type { NextPage } from 'next'
import { ProductScreen } from '../../screen/product'

const ProductById: NextPage = () => {
    return (
        <>
            <title>Delliv - Produtos</title>
            <ProductScreen id={1} />
        </>
    )
}

export default ProductById
