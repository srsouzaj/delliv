import { Typography } from "../../../../components/Typography"
import { CardProduct } from "../../../../components/card/product"
import { useProduct } from "../../../../hooks/useProduct"
import { IProduct } from "../../../../models/interfaces/api/product.interface"
import styles from "./CardList.module.css"
import { useEffect, useState } from "react"

export const CardList = () => {
    const [search, setSearch] = useState<Array<IProduct>>([])
    const { products } = useProduct()


    useEffect(() => {
        setSearch(products.data)
    }, [products])

    const handleChange = (value: string) => {
        const recentSearch = products.data.filter(item => {
            if (value === "") return item
            return item.name.includes(value)
        })
        setSearch(recentSearch)
    }


    return (
        <div className={styles.container}>
            <Typography as="headline">Produtos</Typography>
            <div className={styles.search}>
                <input
                    onChange={(e) => handleChange(e.target.value)}
                    className={styles.input}
                    placeholder="Digite sua pesquisa aqui"
                />
            </div>

            <div className={styles.content}>
                {!products && <Typography>Não há itens para a exibição</Typography>}
                {products.data?.length === 0 &&
                    <Typography>Não há itens para a exibição</Typography>}
                {search?.map(item => (
                    <CardProduct
                        key={item.id}
                        description={item.description}
                        imgSrc={item.imgSrc}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}