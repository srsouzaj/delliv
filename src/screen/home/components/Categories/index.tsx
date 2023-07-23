import { Bed, TShirt, CoatHanger, Barbell, Bag } from "phosphor-react"
import styles from "./Categories.module.css"
import { AppRoutes } from "../../../../utils/routes/appRoutes"
import Link from "next/link"

export const Categories = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} href={AppRoutes.product.byType.url("bag")}>
                <a className={styles.link}>
                    <Bag size={32} color="#fcfcfc" />
                    Bolsas
                </a>
            </Link>
            <Link className={styles.link} href={AppRoutes.product.byType.url("gym")}>
                <a className={styles.link}>
                    <Barbell size={32} color="#fcfcfc" />
                    Treino
                </a>
            </Link>
            <Link className={styles.link} href={AppRoutes.product.byType.url("closet")}>
                <a className={styles.link}>
                    <CoatHanger size={32} color="#fcfcfc" />
                    Vestuário
                </a>
            </Link>
            <Link className={styles.link} href={AppRoutes.product.byType.url("tshirt")}>
                <a className={styles.link}>
                    <TShirt size={32} color="#fcfcfc" />
                    Camisetas
                </a>
            </Link>
        </div>
    )
}