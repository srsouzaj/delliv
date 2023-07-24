import Image from "next/image"
import styles from "./navBar.module.css"
import Logo from "../../../public/logo.jpeg"
import { ShoppingCart } from "phosphor-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { AppRoutes } from "../../utils/routes/appRoutes"

export const NavBar = () => {
    const { pathname } = useRouter()

    if (
        pathname === '/' ||
        pathname.includes('signup')
    )
        return <></>
    return (
        <div className={styles.container}>
            <Link className={styles.link} href={'/home'}>
                <Image className={styles.link} src={Logo} width={80} height={80} alt="Logo da Delliv" />
            </Link>
            <Link className={styles.shopping} href={AppRoutes.checkout.url()}>
                <a className={styles.shopping}>
                    <ShoppingCart color="#FFF" />
                </a>
            </Link>
        </div>
    )
}