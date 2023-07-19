import Link from "next/link"
import styles from "./BoxRegister.module.css"

export const BoxRegister = () => {
    return (
        <div className={styles.container}>
            <div className={styles.register}>
                <p>Não tem cadastro?</p>
                <Link href="/signup" className={styles.link}><a className={styles.link}>Cadastre-se</a></Link>
            </div>
            <p className={styles.copyright}>© Delliv 2023. Todos os direitos reservados</p>
        </div>
    )
}