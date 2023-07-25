import Image from "next/image"
import styles from "./navBar.module.css"
import Logo from "../../../public/logo.jpeg"
import { ShoppingCart } from "phosphor-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { AppRoutes } from "../../utils/routes/appRoutes"
import { useAppSelector } from "../../store/config.reducer"
import { totalCartItemSelector } from "../../store/cart/features/cartSlice"
import Profile from "../../../public/profile.jpg"
import { LogoutDropdownMenu } from "../Dropdown/Logout"
import { CartDropdownMenu } from "../Dropdown/Carts"

export const NavBar = () => {
    const totalItems = useAppSelector(totalCartItemSelector)
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

            <div className={styles.profile}>
                <CartDropdownMenu />
                <div className={styles.profilePhoto} >
                    <Image src={Profile} alt="profile photo" width={25} height={25} />
                </div>
                <LogoutDropdownMenu />
            </div>
        </div>
    )
}