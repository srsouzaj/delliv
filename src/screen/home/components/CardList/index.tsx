import { Typography } from "../../../../components/Typography"
import { CardProduct } from "../../../../components/card/product"
import { useProduct } from "../../../../hooks/useProduct"
import styles from "./CardList.module.css"

export const CardList = () => {
    const { products } = useProduct()
    return (
        <>
            <Typography as="headline">Produtos</Typography>
            <div className={styles.container}>
                {products.data?.length === 0 &&
                    <Typography>Não há itens para a exibição</Typography>}
                {products.data?.map(product => {
                    return (
                        <CardProduct
                            key={product.id}
                            imgSrc={product.imgSrc}
                            description={product.description}
                            name={product.name}
                            price={product.price}
                        />
                    )
                })}
            </div>
        </>
    )
}