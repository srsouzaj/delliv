import Image from "next/image"
import { Typography } from "../../components/Typography"
import styles from "./NotFound.module.css"
import Background from "../../../public/notfound.png"
import Link from "next/link"

export const NotFoundScreen = () => {
    return (
        <div className={styles.container}>
            <Image src={Background} width={600} height={400} alt="NotFound da Delliv" />
            <div className={styles.description}>
                <Typography as="headline">Essa página não foi encontrada</Typography>
                <Typography as="small">No momento, a página solicitada não foi encontrada, tente novamente mais tarde.</Typography>
                <Link className={styles.link} href="/">

                    <a className={styles.link}>
                        Voltar
                    </a>
                </Link>
            </div>
        </div>
    )
}