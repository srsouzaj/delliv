import { Bed, TShirt, CoatHanger, Barbell } from "phosphor-react"
import styles from "./Categories.module.css"
import { AppRoutes } from "../../../../utils/routes/appRoutes"
import Link from "next/link"

export const Categories = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} href={AppRoutes.product.byId.url(1)}>
                <a className={styles.link}>
                    <Bed size={32} color="#fcfcfc" />
                    Cama
                </a>
            </Link>
            <Link className={styles.link} href={AppRoutes.product.byId.url(2)}>
                <a className={styles.link}>
                    <Barbell size={32} color="#fcfcfc" />
                    Treino
                </a>
            </Link>
            <Link className={styles.link} href={AppRoutes.product.byId.url(3)}>
                <a className={styles.link}>
                    <CoatHanger size={32} color="#fcfcfc" /> Vestuário
                </a>
            </Link>
            <Link className={styles.link} href={AppRoutes.product.byId.url(4)}>
                <a className={styles.link}>
                    <TShirt size={32} color="#fcfcfc" />
                    Camisetas
                </a>
            </Link>
        </div>
    )
}