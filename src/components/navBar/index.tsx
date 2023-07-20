import Image from "next/image"
import styles from "./navBar.module.css"
import Logo from "../../../public/logo.jpeg"
import { ShoppingCart } from "phosphor-react"
import { Search } from "./Search"
import Link from "next/link"
import { useRouter } from "next/router"

export const NavBar = () => {
    const { pathname } = useRouter()

    if (
        pathname === '/' ||
        pathname.includes('signup')
    )
        return <></>
    return (
        <div className={styles.container}>
            <Link href={'home'}>
                <Image src={Logo} width={80} height={80} alt="Logo da Delliv" />
            </Link>
            <Search />
            <span className={styles.shopping}><ShoppingCart color="#FFF" /></span>
        </div>
    )
}