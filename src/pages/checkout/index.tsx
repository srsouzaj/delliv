import type { GetServerSideProps, NextPage } from 'next'
import { CheckoutScreen } from '../../screen/checkout'
import { parseCookies } from 'nookies'

const ProductById: NextPage = () => {
    return (
        <>
            <title>Delliv - Checkout</title>
            <CheckoutScreen />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { dellivToken } = parseCookies(context)

    if (!dellivToken) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {}
    }
}

export default ProductById
