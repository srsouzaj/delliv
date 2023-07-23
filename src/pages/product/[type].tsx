import type { GetServerSideProps, NextPage } from 'next'
import { ProductScreen } from '../../screen/product'
import { serverSideProduct } from "../../hooks/server-side/useProductServerSide"
import { CategoryType, IProduct } from '../../models/interfaces/api/product.interface'
import { IPagination } from '../../models/interfaces/api/pagination.interface'
import { useState } from 'react'
import { ProductEnum, ProductEnumType } from '../../utils/from-to/categories'

interface IProductByType {
    product: IPagination<IProduct>
    type: CategoryType
}

const ProductByType: NextPage<IProductByType> = ({ product, type }) => {

    const productsCategory: IProduct[] = product.data?.filter(item => {
        if (item.category.includes(type)) {
            return item
        }
    })

    const categories = `Delliv - Produtos relacionados à ${ProductEnum[type as ProductEnumType]}`

    return (
        <>
            <title>{categories}</title>
            <ProductScreen type={ProductEnum[type as ProductEnumType]} products={productsCategory} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const type = context.params?.type

    const product = await serverSideProduct()



    // const { SensoramaToken } = parseCookies(context)

    // if (!SensoramaToken) {
    //     return {
    //         redirect: {
    //             destination: '/',
    //             permanent: false,
    //         },
    //     }
    // }

    return {
        props: {
            product,
            type
        }
    }
}


export default ProductByType
